---
title: 'REA: The Complete Guide to AI-Powered Reverse Engineering'
date: '2026-10-18'
tags: ['blogpost', 'AI', 'Reverse Engineering', 'Claude', 'Codex', 'LLM', 'Security Research', 'Tools']
description: 'A deep dive into REA (Reverse Engineer Anything) — the viral open-source toolkit that bridges AI coding agents with binary analysis engines like Ghidra and Hopper.'
image: '/images/posts/rea-llm-guide.svg'
readTime: 12
---

<div class="callout tldr">
  <div class="co-icon">⚡</div>
  <div>
    <b>TL;DR</b>
    <p>REA (Reverse Engineer Anything) is an MCP server that connects AI coding agents like <b>Claude Code</b> and <b>Codex</b> to traditional reverse engineering tools. It lets you ask an LLM to analyze binaries, trace function calls, and even write replacement code — all with evidence-backed results that never leave your machine.</p>
  </div>
</div>

## The Problem REA Solves

Reverse engineering has always been a manual, time-consuming craft. Security researchers spend hours staring at disassembly, tracing call graphs, and mentally reconstructing logic flows. Meanwhile, AI coding assistants have revolutionized how we write code — but they hit a wall when facing closed-source binaries.

<div class="callout insight">
  <div class="co-icon">💡</div>
  <div>
    <b>The Core Limitation</b>
    <p>LLMs cannot natively read compiled binaries. They can't inspect unexported app behaviors, decompile machine code, or trace IPC channels. REA bridges this gap.</p>
  </div>
</div>

**REA (Reverse Engineer Anything)** changes the game by acting as an intelligent bridge between AI coding agents and industry-standard analysis engines like **Ghidra**, **Hopper**, and **IDA Pro**.

---

## What Makes REA Different

<div class="features-grid">
  <div class="feature-card">
    <div class="f-icon">🔒</div>
    <h4>Local-First Privacy</h4>
    <p>Your binaries never leave your machine. All analysis runs locally.</p>
  </div>
  <div class="feature-card">
    <div class="f-icon">📋</div>
    <h4>Evidence-Backed</h4>
    <p>Every conclusion comes with verifiable code snippets and SHA-256 digests.</p>
  </div>
  <div class="feature-card">
    <div class="f-icon">⚡</div>
    <h4>Insight to Code</h4>
    <p>Understand a feature, then immediately write a replacement for your stack.</p>
  </div>
  <div class="feature-card">
    <div class="f-icon">🔧</div>
    <h4>Tool Agnostic</h4>
    <p>Works with Ghidra, Hopper, IDA — wraps mature tools you already trust.</p>
  </div>
</div>

---

## The Architecture

REA operates as multi-layer orchestration middleware. When your AI agent wants to inspect a file, it doesn't fumble through raw bytes — it goes through a carefully designed pipeline.

<div class="arch-diagram">
<pre class="diagram">
┌─────────────────────────────────────────────────────────────┐
│                    <span class="hl-primary">AI CODING AGENT</span>                        │
│           Claude Code  ·  Codex  ·  Cursor  ·  Pi           │
└─────────────────────────────┬───────────────────────────────┘
                              │
                    <span class="hl-muted">Model Context Protocol (MCP)</span>
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      <span class="hl-accent">REA SERVER</span>                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Middleware Chain                                    │   │
│  │  <span class="hl-muted">Audit → Kill-Switch → Policy → Redaction</span>           │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Evidence v2 Tracking  ·  State Management          │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────┬───────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ <span class="hl-secondary">NATIVE APPS</span>   │   │  <span class="hl-secondary">ELECTRON</span>     │   │   <span class="hl-secondary">BROWSER</span>    │
│ Hopper/Ghidra │   │  JS / ASAR    │   │   CDP / DevTools│
└───────────────┘   └───────────────┘   └───────────────┘
</pre>
</div>

### The Middleware Chain

Every REA tool call passes through a strict, fail-closed pipeline:

<ol class="flow">
  <li><span class="fn">1</span><b>Audit Enter</b><p>Logs a hash-chained record of the invocation</p></li>
  <li><span class="fn">2</span><b>Kill-Switch</b><p>Instantly denies execution if <code>.rea/HALT</code> exists</p></li>
  <li><span class="fn">3</span><b>Tier Classification</b><p>Categorizes tool as <code>read</code>, <code>write</code>, or <code>destructive</code></p></li>
  <li><span class="fn">4</span><b>Policy Check</b><p>Validates against autonomy levels (L0–L3) in <code>.rea/policy.yaml</code></p></li>
  <li><span class="fn">5</span><b>Injection Filter</b><p>Scans arguments for protected paths and prompt-injection attempts</p></li>
  <li><span class="fn">6</span><b>Redaction</b><p>Scrubs secrets before they reach LLM context windows</p></li>
</ol>

---

## The Investigation Flow

An AI-driven reverse engineering session follows a disciplined cycle:

<div class="flow-diagram">
<pre class="diagram">
    ┌──────────────┐         ┌──────────────┐         ┌──────────────┐
    │              │         │              │         │              │
    │  <span class="hl-step">DECOMPILE</span>  │────────▶│ <span class="hl-step">UNDERSTAND</span>  │────────▶│  <span class="hl-step">RECREATE</span>   │
    │              │         │              │         │              │
    └──────────────┘         └──────────────┘         └──────────────┘
           │                        │                        │
           ▼                        ▼                        ▼
    ┌──────────────┐         ┌──────────────┐         ┌──────────────┐
    │ Extract:     │         │ Trace:       │         │ Generate:    │
    │ • Pseudocode │         │ • Xrefs      │         │ • Functional │
    │ • Symbols    │         │ • Call graphs│         │   code       │
    │ • Strings    │         │ • IPC flows  │         │ • Tests      │
    └──────────────┘         └──────────────┘         └──────────────┘
</pre>
</div>

---

## What REA Can Analyze

<div class="target-matrix">

| Target Type | What REA Returns | Requirements |
|-------------|------------------|--------------|
| **Native Binaries** | Pseudocode, assembly, symbols, call graphs | Hopper, Ghidra, or IDA |
| **JavaScript / Electron** | Modules, imports, IPC channels, routes | Built-in (no deps) |
| **Websites & Web Apps** | DOM structure, scripts, network payloads | Chrome via CDP |
| **.NET Assemblies** | Metadata, CIL instructions, dependencies | Built-in |
| **Android APKs** | Manifest, classes, decompiled methods | JADX + JDK |
| **Archives** (ZIP, IPA, ASAR) | Content-addressed inventories | Built-in |

</div>

---

## Installation & Setup

<div class="callout info">
  <div class="co-icon">ℹ️</div>
  <div>
    <b>Prerequisites</b>
    <ul>
      <li><b>Node.js:</b> v22.19+ or v24.11+ (or v26+)</li>
      <li><b>OS:</b> macOS 12+, Ubuntu 24.04+, Fedora 41+, Arch Linux (64-bit)</li>
      <li><b>Analysis Engine:</b> Hopper Disassembler (optional, recommended for deep native analysis)</li>
    </ul>
  </div>
</div>

### Step 1: Install Globally

<figure class="code">
  <figcaption><span class="lang">bash</span><span class="fname">Terminal</span></figcaption>
  <pre><code>npm install --global rea-agents</code></pre>
</figure>

### Step 2: Run Interactive Setup

<figure class="code">
  <figcaption><span class="lang">bash</span><span class="fname">Terminal</span></figcaption>
  <pre><code>rea setup</code></pre>
</figure>

This detects installed agents (Claude Code, Codex, Cursor, etc.), shows a transparent review plan, backs up existing configs, and waits for your approval.

### Step 3: Verify Installation

<figure class="code">
  <figcaption><span class="lang">bash</span><span class="fname">Terminal</span></figcaption>
  <pre><code>rea doctor</code></pre>
</figure>

---

## Real-World Case Studies

<div class="case-studies">

<div class="case-card">
  <div class="case-header">
    <span class="case-icon">📋</span>
    <h4>Notion Clipboard Bridge</h4>
  </div>
  <p>An agent traced Notion's clipboard functionality from the UI renderer through preload scripts and IPC channels into the native process — reconstructing the entire data flow.</p>
</div>

<div class="case-card">
  <div class="case-header">
    <span class="case-icon">🎮</span>
    <h4>Retro Game Math</h4>
  </div>
  <p>REA helped reconstruct the sound-pan calculation from <i>DX-Ball</i> and the bullet-ring formula from <i>Touhou TH04</i> with extreme fidelity.</p>
</div>

<div class="case-card">
  <div class="case-header">
    <span class="case-icon">⚡</span>
    <h4>Electron App Analysis</h4>
  </div>
  <p>Developers examining CloudCLI discovered that scoping scans to <code>/electron/</code> instead of <code>node_modules</code> prevents OOM errors and yields accurate IPC maps.</p>
</div>

</div>

---

## REA vs. Lean REA

While REA ships with a robust 207-tool MCP server, some developers encounter context window bloat. Enter **Lean REA** — a lightweight alternative.

<div class="comparison-table">

| Feature | Full REA (MCP Server) | Lean REA (Skill File) |
|---------|----------------------|----------------------|
| **Architecture** | MCP Server + 70–207 tools | Single ~8KB instruction file |
| **Execution** | Proxied middleware calls | Direct shell (`rg`, `otool`, `strings`) |
| **Token Overhead** | Higher (loads full schemas) | Minimal |
| **Best For** | Deep native binary decomposition | Fast script/source analysis |

</div>

Install the lean variant:

<figure class="code">
  <figcaption><span class="lang">bash</span><span class="fname">Terminal</span></figcaption>
  <pre><code>npx skills add a16z/lean-rea</code></pre>
</figure>

---

## Security Considerations

<div class="callout warn">
  <div class="co-icon">⚠️</div>
  <div>
    <b>Not a Sandbox</b>
    <p>REA's local provider bridge is powerful, but it is <b>not</b> a secure sandbox. Executing untrusted binaries always carries inherent operational risks.</p>
  </div>
</div>

### Safety Mechanisms

<div class="safety-grid">
  <div class="safety-item">
    <span class="s-icon">🛑</span>
    <div>
      <b>Kill-Switch</b>
      <p>Create <code>.rea/HALT</code> to instantly shut down all tool execution.</p>
    </div>
  </div>
  <div class="safety-item">
    <span class="s-icon">🔐</span>
    <div>
      <b>Fail-Closed</b>
      <p>If a tool errors, the circuit breaker trips and halts execution.</p>
    </div>
  </div>
  <div class="safety-item">
    <span class="s-icon">🔍</span>
    <div>
      <b>Redaction Layer</b>
      <p>API keys, PEM files, and credentials are scrubbed before reaching LLMs.</p>
    </div>
  </div>
</div>

---

## Best Practices Checklist

<div class="checklist">
  <label><input type="checkbox" disabled /> <b>Scope your targets</b> — Never point automated scans at massive folders like <code>node_modules</code></label>
  <label><input type="checkbox" disabled /> <b>Review agent plans</b> — Always inspect configuration changes from <code>rea setup</code></label>
  <label><input type="checkbox" disabled /> <b>Verify with evidence</b> — Demand Evidence v2 identifiers and code blocks before accepting conclusions</label>
  <label><input type="checkbox" disabled /> <b>Use the right tool</b> — Lean REA for quick scripts; Full REA for deep binary analysis</label>
  <label><input type="checkbox" disabled /> <b>Know your kill-switch</b> — Keep <code>.rea/HALT</code> ready for emergencies</label>
</div>

---

## Conclusion

REA represents a paradigm shift in how we approach reverse engineering. By bridging AI coding agents with battle-tested analysis tools, it transforms what was once a week-long manual effort into an interactive conversation with your code.

Whether you're tracing IPC channels in Electron apps, reconstructing game logic from DOS-era binaries, or auditing the behavior of closed-source tools — REA lets you move from curiosity to working code faster than ever before.

<div class="callout success">
  <div class="co-icon">🚀</div>
  <div>
    <b>Get Started</b>
    <p>Install REA today with <code>npm install --global rea-agents</code> and run <code>rea setup</code> to connect your favorite AI coding assistant.</p>
  </div>
</div>
