const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://bio.johnengates.com';

const site = {
  name: 'John Engates',
  url: DOMAIN,
  summary: 'Personal link-in-bio site for John Engates -- AI researcher, technology leader, and board director based in San Antonio, TX.',

  links: {
    linkedin: 'https://www.linkedin.com/in/jengates/',
    x: 'https://x.com/jengates',
    github: 'https://github.com/JohnEngates',
    bio: `${DOMAIN}/bio.html`,
  },

  currentFocus: [
    'Agentic AI deployment for enterprise automation and decision-making',
    'Agentic coding with tools like Claude Code, OpenAI Codex, Cursor, and Google Antigravity',
    'Multi-agent orchestration, swarm architectures, and emergent collaboration',
    'Local LLMs with tools and models like Ollama, LM Studio, GPT-OSS, and Qwen3',
    'Image generation with Google Nano Banana, FLUX.2, SDXL, and Z-Image',
  ],

  currentRoles: [
    { title: 'President', org: 'SIM San Antonio', url: 'https://chapter.simnet.org/sanantonio/home' },
    { title: 'Independent Director', org: 'Frost Bank (NYSE: CFR)' },
    { title: 'Board Member', org: 'James Avery Artisan Jewelry' },
    { title: 'Mentor & Investor', org: 'Techstars' },
  ],

  career: [
    { title: 'Field CTO', org: 'Cloudflare', years: '2021-2025' },
    { title: 'CTO & VP Operations', org: 'Rackspace', years: '2000-2018' },
    { title: 'Co-founder', org: 'Internet Direct', years: '1995-2000' },
  ],

  expertise: ['Agentic AI', 'Multi-Agent Systems', 'Cyber Security', 'Quantum Computing', 'Edge Computing'],

  contact: 'DM on X (https://x.com/jengates) or connect on LinkedIn (https://www.linkedin.com/in/jengates/)',
};

function generate() {
  const now = new Date().toISOString();

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.summary}`,
    '',
    `- **Source**: [${site.url}](${site.url})`,
    `- **Generated**: ${now}`,
    '',
    '---',
    '',
    '## Connect',
    '',
    ...Object.entries(site.links).map(([label, url]) => `- [${label}](${url})`),
    '',
    '## Expertise',
    '',
    ...site.expertise.map(s => `- ${s}`),
    '',
    '## Current Focus',
    '',
    ...site.currentFocus.map(f => `- ${f}`),
    '',
    '## Current Roles',
    '',
    ...site.currentRoles.map(r => r.url
      ? `- **${r.title}** -- [${r.org}](${r.url})`
      : `- **${r.title}** -- ${r.org}`
    ),
    '',
    '## Career',
    '',
    ...site.career.map(c => `- **${c.title}**, ${c.org} (${c.years})`),
    '',
    '## Contact',
    '',
    site.contact,
    '',
  ];

  const outDir = path.join(__dirname, '..', 'agents');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.md'), lines.join('\n'));
  console.log(`Generated agents/index.md at ${now}`);
}

generate();
