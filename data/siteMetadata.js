const siteMetadata = {
  title: 'QwesiRED',
  author: 'Adam Nurudini',
  headerTitle: 'QwesiRED',
  description: 'Offensive Security Consultant | AppSec & SecOps Leader',
  language: 'en-us',
  theme: 'dark',
  siteUrl: 'https://qwesired.github.io',
  siteRepo: 'https://github.com/QwesiRED/qwesired.github.io',
  email: 'adam.nurudini@gmail.com',
  github: 'https://github.com/QwesiRED',
  twitter: 'https://x.com/Qwesi_RED',
  linkedin: 'https://www.linkedin.com/in/adamnurudini/',
  location: 'Melbourne, Australia',

  profile: {
    headline: 'Security Consultant with AppSec & SecOps Expertise',
    tagline: "I don't just find vulnerabilities; I help organizations build resilience.",
    summary: "My career has been defined by a \"full-spectrum\" perspective on security. I've sat on both sides of the fence — building and leading a National Bank's SOC from the ground up, and now operating as an Offensive Security Consultant at Sekuro, where I simulate the adversary to protect Australia's most critical enterprises.",
    terminalIntro: 'Hello, I am Adam Nurudini (QwesiRED)',
    terminalRole: 'Penetration Tester, Security Researcher, AppSec and SecOps Engineer',
    terminalTagline: 'Uncovering critical security flaws that conventional testing misses',
    specialties: [
      'Internal and External Infra Testing',
      'AD & Entra Pentest',
      'Cloud Config Reviews',
      'Code Reviews & Code Assisted Pentest',
      'Mobile/Web/API Pentest',
      'Security Tools Deployment (Vuln Scanners, PAM, SIEM, EDR, NTA)'
    ],
    highlights: [
      'Delivered advanced penetration testing and red team engagements across web, API, mobile, and cloud platforms',
      'Built and led full-scale SOC capability for a tier-1 bank, achieving zero data breaches',
      'Launched Mobile App Security Testing service offering at Sekuro',
      'Drove ISO 27001 and PCIDSS certifications for financial institutions',
      'CVE Author with multiple critical vulnerability discoveries'
    ]
  },

  experience: [
    {
      role: 'Offensive Security Consultant',
      company: 'Sekuro',
      location: 'Melbourne, AU',
      period: 'Aug 2023 - Present',
      type: 'offensive',
      highlights: [
        'Developed Mobile Application Security Testing service offering',
        'Led multiple client engagements and security assessments',
        'Conducted AWS, Azure, and GCP cloud security audits',
        'Performed code reviews and secure code assessments',
        'Conducted device and network configuration reviews',
        'Facilitated tabletop exercises for incident response readiness',
        'Executed phishing engagements simulating real-world attacks',
        'Performed API, web, mobile, and infrastructure testing'
      ]
    },
    {
      role: 'Security Operations Centre Manager',
      company: 'Consolidated Bank Ghana',
      location: 'Accra, Ghana',
      period: 'Jan 2022 - Aug 2023',
      type: 'management',
      highlights: [
        'Built and led full-scale SOC with zero data breaches',
        'Managed ISO 27001 and PCIDSS certification projects',
        'Implemented Imperva WAF and DAM solutions',
        'Designed security infrastructure for Development Bank Ghana',
        'Hired and trained junior and senior SOC analysts'
      ]
    },
    {
      role: 'Senior Security Engineer - Detection & Response',
      company: 'Consolidated Bank Ghana',
      location: 'Accra, Ghana',
      period: 'Jul 2019 - Jan 2022',
      type: 'engineering',
      highlights: [
        'Deployed Rapid7 InsightIDR SIEM & XDR',
        'Implemented Darktrace Enterprise Immune System',
        'Performed VAPT on 200+ applications',
        'Implemented CyberArk PAM solution',
        'Deployed KnowBe4 security awareness platform',
        'Managed 3500+ endpoints and 800+ servers'
      ]
    },
    {
      role: 'Senior Security Consultant (Pentest)',
      company: 'Netwatch Technologies',
      location: 'Accra, Ghana',
      period: 'Jul 2018 - Jul 2019',
      type: 'offensive',
      highlights: [
        'Led incidence response services',
        'Led API and Mobile application security assessments',
        'Conducted social engineering engagements',
        'Performed cloud infrastructure security audits'
      ]
    },
    {
      role: 'Information Security Officer',
      company: 'ToppCore Security',
      location: 'Accra, Ghana',
      period: 'Jan 2015 - Jul 2018',
      type: 'offensive',
      highlights: [
        'Performed penetration tests on web, network, and mobile apps',
        'Conducted physical security assessments',
        'Designed and implemented network infrastructure'
      ]
    }
  ],

  certifications: [
    // OffSec Certifications (Credential.net)
    { name: 'OSCP+', fullName: 'OffSec Certified Professional+', provider: 'OffSec', year: '2025', url: 'https://www.credential.net/1dec220c-8ba9-4c31-bb30-d84ef8ad5e31', active: true },
    { name: 'OSCP', fullName: 'OffSec Certified Professional', provider: 'OffSec', year: '2025', url: 'https://www.credential.net/11dc7859-78da-4688-b749-953c62dd6c48', active: true },
    // INE Certifications (Credential.net)
    { name: 'eMAPT', fullName: 'Mobile Application Penetration Tester', provider: 'INE', year: '2025', url: 'https://www.credential.net/3b6e2a73-a306-4d0b-9180-db2cd2c63468', active: true },
    { name: 'eWPTX', fullName: 'Web Application Penetration Tester eXtreme', provider: 'INE', year: '2023', url: 'https://www.credential.net/81c5043b-5690-49b0-bd05-9c71317d2646', active: true },
    // TCM Security (Credential.net)
    { name: 'PNPT', fullName: 'Practical Network Penetration Tester', provider: 'TCM Security', year: '2024', url: 'https://www.credential.net/03896e2c-86eb-408e-8113-24fa937910cd', active: true },
    // CREST Certifications (Credly)
    { name: 'CRT', fullName: 'CREST Registered Penetration Tester', provider: 'CREST', year: '2025', url: 'https://www.credly.com/badges/546ba5db-7947-483e-ac15-355d17140b4b', active: true },
    { name: 'CPSA', fullName: 'CREST Practitioner Security Analyst', provider: 'CREST', year: '2025', url: 'https://www.credly.com/badges/f5c1b1a6-aa5a-45f2-91b4-1eb4ee3f589f', active: true },
    // PECB Certifications (Credly)
    { name: 'ISO 27032', fullName: 'ISO/IEC 27032 Cybersecurity Manager', provider: 'PECB', year: '2025', url: 'https://www.credly.com/badges/c3669309-02ed-434b-8ee8-78e3903f06ef', active: true },
    { name: 'ISO 27001', fullName: 'ISO/IEC 27001 Implementer', provider: 'PECB', year: '2024', url: 'https://www.credly.com/badges/0064b044-aa71-41da-94e3-33f711b239ce', active: true },
    // Microsoft (Credly)
    { name: 'SC-900', fullName: 'Security, Compliance, and Identity Fundamentals', provider: 'Microsoft', year: '2023', url: 'https://www.credly.com/badges/9492ff9b-c7d5-4407-82ff-70b56a03ea43', active: true },
  ],

  technologies: {
    'SIEM & XDR': ['Rapid7 InsightIDR', 'Microsoft Sentinel', 'Splunk', 'ELK Stack'],
    'Vulnerability Management': ['Rapid7 InsightVM', 'Nessus', 'Acunetix', 'Netsparker'],
    'AppSec Tools': ['Burp Suite', 'Checkmarx', 'SonarLint', 'MobSF', 'Objection'],
    'Network Security': ['Darktrace', 'Imperva WAF & DAM', 'Palo Alto', 'Cisco ISE', 'FortiGate'],
    'Cloud Platforms': ['AWS', 'Azure', 'GCP', 'Cloudflare'],
    'PAM & IAM': ['CyberArk', 'Microsoft Entra'],
    'Offensive Tools': ['Metasploit', 'Cobalt Strike', 'Nmap', 'SQLMap', 'Frida'],
    'Languages': ['Python', 'Bash', 'Go', 'PHP', 'Java']
  },

  expertise: [
    {
      title: 'AppSec',
      description: 'Web, Mobile, and API security assessments. Finding vulnerabilities in application logic, authentication, and data handling across platforms.',
      icon: 'code'
    },
    {
      title: 'Exploit Development',
      description: 'Creating proof-of-concept exploits for discovered vulnerabilities. Automating exploitation to demonstrate real-world impact.',
      icon: 'bug'
    },
    {
      title: 'Security Research',
      description: 'Responsible disclosure of vulnerabilities in commercial software. Multiple CVE discoveries in enterprise applications.',
      icon: 'search'
    },
    {
      title: 'SecOps',
      description: 'Deploying and managing security tools: Nessus, Rapid7 InsightVM/IDR/AppSec, CyberArk PAM, Darktrace NTA, Microsoft Sentinel & XDR, UTMStack SIEM.',
      icon: 'shield'
    },
    {
      title: 'Code Review',
      description: 'SAST with SonarQube, Checkmarx, Semgrep. Manual code review augmented with LLM agents for comprehensive coverage.',
      icon: 'file'
    },
    {
      title: 'Security Consulting',
      description: 'Providing end-to-end security services to clients across industries. Risk assessments, compliance guidance, and security architecture.',
      icon: 'briefcase'
    }
  ],

  cves: [
    {
      id: 'CVE-2026-80138',
      title: 'ClipBucket V5 OS Command Injection',
      product: 'ClipBucket V5',
      versions: '5.5.1 - 5.5.3-#153',
      severity: 'Critical',
      cvss: '9.8',
      description: 'OS Command Injection via Installer php_cli_filepath Parameter'
    },
    {
      id: 'CVE-2026-77914',
      title: 'rConfig Path Traversal',
      product: 'rConfig Core',
      versions: '8.0.0 - 8.2.13',
      severity: 'Critical',
      cvss: '7.1',
      description: 'Arbitrary File Read via Export Download Endpoint'
    },
    {
      id: 'CVE-2026-77915',
      title: 'rConfig Unauthorized Admin Registration',
      product: 'rConfig Core',
      versions: '8.0.0 - 8.2.13',
      severity: 'Critical',
      cvss: '10.0',
      description: 'Unauthenticated Admin Account Creation via Duplicate Auth Routes'
    }
  ],

  speaking: [
    'ISACA - Philosophy of Information Security Workshop',
    'OWASP Ghana Chapter - Conference Speaker & Host',
    'Mobex Africa ICT Expo - Cyber Security Conference',
    'GIMPA School of Technology - Cyber Security Workshop Trainer',
    'Black Hat Asia 2018 - Conference Attendee'
  ],

  tools: [
    {
      name: 'LazySnaffler',
      description: 'A tool for automating credential and sensitive data discovery in Windows environments.',
      github: 'https://github.com/QwesiRED/LazySnaffler',
      tags: ['Python', 'Windows', 'Credentials']
    }
  ],

  ctfWriteups: [
    {
      name: 'CTF Writeups Repository',
      description: 'Collection of CTF challenge writeups and solutions.',
      github: 'https://github.com/QwesiRED/CTF-Writeups',
      tags: ['CTF', 'Writeups']
    }
  ],

  talks: [
    {
      title: 'Purple Team - Offensive and Defensive Collaborative Simulation',
      event: 'Security Conference',
      date: '2024',
      description: 'Exploring purple team methodologies that bring together offensive and defensive security strategies for comprehensive security testing and improvement.',
      tags: ['Purple Team', 'Red Team', 'Blue Team'],
      slides: 'https://www.slideshare.net/AdamQuesi/purple-team-offensive-and-defensive-collaborative-simulation',
    },
    {
      title: 'GitStack 0-Day Remote Code Execution',
      event: 'Security Research',
      date: '2018',
      description: 'Technical deep-dive into discovering and exploiting a zero-day vulnerability in GitStack leading to remote code execution.',
      tags: ['0-Day', 'RCE', 'Exploit Development'],
      slides: 'https://www.slideshare.net/AdamQuesi/gitstack-0day-remote-code-execution-adam-nurudini',
    },
    {
      title: 'Unrestricted File Upload (CWE-434)',
      event: 'ISACA Ghana',
      date: '2015',
      description: 'Comprehensive coverage of unrestricted file upload vulnerabilities, attack techniques, and secure implementation practices.',
      tags: ['Web Security', 'File Upload', 'CWE-434'],
      slides: 'https://www.slideshare.net/AdamQuesi/unrestricted-file-upload-cwe434-adam-nurudini-isaca',
    },
    {
      title: 'OSINT - Open Source Intelligence',
      event: 'OWASP Ghana',
      date: '2015',
      description: 'Techniques and tools for gathering open-source intelligence for security assessments and reconnaissance.',
      tags: ['OSINT', 'Reconnaissance', 'OWASP'],
      slides: 'https://www.slideshare.net/AdamQuesi/owasp-osint-presentation-by-adam-nurudini',
    },
    {
      title: 'Cross-Site Scripting (XSS) Attacks',
      event: 'Security Training',
      date: '2015',
      description: 'Understanding cross-site scripting attack vectors, payloads, and defense mechanisms for web applications.',
      tags: ['XSS', 'Web Security', 'OWASP Top 10'],
      slides: 'https://www.slideshare.net/AdamQuesi/cross-site-scripting-attacks-by-adam-nurudini',
    }
  ]
}

module.exports = siteMetadata
