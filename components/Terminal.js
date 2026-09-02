import { useState, useEffect, useRef, useCallback } from 'react'
import { FaRedo } from 'react-icons/fa'

const terminalLines = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'Adam Nurudini (QwesiRED)', color: 'text-accent' },
  { type: 'command', text: 'cat specialties.txt' },
  { type: 'output', text: 'Internal & External Infra Testing', color: 'text-dark-muted' },
  { type: 'output', text: 'AD & Entra Pentest', color: 'text-dark-muted' },
  { type: 'output', text: 'Cloud Config Reviews', color: 'text-dark-muted' },
  { type: 'output', text: 'Mobile/Web/API Pentest', color: 'text-dark-muted' },
  { type: 'output', text: 'Code Reviews & SAST', color: 'text-dark-muted' },
  { type: 'output', text: 'Security Tools Deployment', color: 'text-dark-muted' },
  { type: 'command', text: 'ls -la cves/' },
  { type: 'output', text: 'CVE-2026-80138  CVE-2026-77914  CVE-2026-77915', color: 'text-success' },
  { type: 'command', text: 'echo $STATUS' },
  { type: 'output', text: 'Responsible for multiple CVE discoveries', color: 'text-warning' },
]

export default function Terminal() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const terminalRef = useRef(null)

  const replay = useCallback(() => {
    setDisplayedLines([])
    setCurrentLineIndex(0)
    setCurrentCharIndex(0)
    setIsTyping(true)
  }, [])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      setIsTyping(false)
      return
    }

    const currentLine = terminalLines[currentLineIndex]
    const fullText = currentLine.type === 'command'
      ? currentLine.text
      : currentLine.text

    if (currentCharIndex < fullText.length) {
      const typingSpeed = currentLine.type === 'command' ? 50 : 15
      const timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1)
      }, typingSpeed + Math.random() * 30)
      return () => clearTimeout(timeout)
    } else {
      // Line complete, move to next
      const delay = currentLine.type === 'command' ? 400 : 100
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, {
          ...currentLine,
          text: fullText
        }])
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex])

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedLines, currentCharIndex])

  const getCurrentTypingText = () => {
    if (currentLineIndex >= terminalLines.length) return ''
    const currentLine = terminalLines[currentLineIndex]
    return currentLine.text.substring(0, currentCharIndex)
  }

  const getCurrentLine = () => {
    if (currentLineIndex >= terminalLines.length) return null
    return terminalLines[currentLineIndex]
  }

  return (
    <div className="terminal">
      <div className="terminal-header flex items-center justify-between">
        <div className="flex items-center">
          <div className="terminal-dots">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
          </div>
          <span className="terminal-title">terminal — qwesired@sh</span>
        </div>
        {!isTyping && (
          <button
            onClick={replay}
            className="text-dark-faded hover:text-accent transition-colors p-1"
            title="Replay"
          >
            <FaRedo size={10} />
          </button>
        )}
      </div>
      <div
        ref={terminalRef}
        className="terminal-body text-xs font-mono overflow-y-auto"
        style={{ maxHeight: '280px', minHeight: '200px' }}
      >
        {/* Displayed lines */}
        {displayedLines.map((line, idx) => (
          <div key={idx} className="mb-1">
            {line.type === 'command' ? (
              <div>
                <span className="text-accent">QwesiRED</span>
                <span className="text-dark-faded">@sh</span>
                <span className="text-dark-muted">:</span>
                <span className="text-info">~</span>
                <span className="text-dark-muted">$ </span>
                <span className="text-dark-text">{line.text}</span>
              </div>
            ) : (
              <div className={line.color || 'text-dark-text'}>{line.text}</div>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {isTyping && getCurrentLine() && (
          <div className="mb-1">
            {getCurrentLine().type === 'command' ? (
              <div>
                <span className="text-accent">QwesiRED</span>
                <span className="text-dark-faded">@sh</span>
                <span className="text-dark-muted">:</span>
                <span className="text-info">~</span>
                <span className="text-dark-muted">$ </span>
                <span className="text-dark-text">{getCurrentTypingText()}</span>
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-accent`}>▋</span>
              </div>
            ) : (
              <div className={getCurrentLine().color || 'text-dark-text'}>
                {getCurrentTypingText()}
                {currentCharIndex < getCurrentLine().text.length && (
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-accent`}>▋</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Final prompt after all lines */}
        {!isTyping && (
          <div>
            <span className="text-accent">QwesiRED</span>
            <span className="text-dark-faded">@sh</span>
            <span className="text-dark-muted">:</span>
            <span className="text-info">~</span>
            <span className="text-dark-muted">$ </span>
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-accent`}>▋</span>
          </div>
        )}
      </div>
    </div>
  )
}
