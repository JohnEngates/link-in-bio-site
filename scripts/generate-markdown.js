const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://bio.johnengates.com';
const MAIN_SITE = 'https://engateshome.jengates.workers.dev';

const site = {
  name: 'John Engates',
  url: DOMAIN,
  mainSite: MAIN_SITE,
  summary: 'Personal link-in-bio site for John Engates -- AI researcher, technology leader, and board director based in San Antonio, TX.',

  bio: 'Former CTO roles at Rackspace (18 years), NTT, and Cloudflare. Engineered the cloud foundation hosted at Rackspace that powered YouTube\'s early growth, called to the White House to advise on rescuing Healthcare.gov during its critical launch crisis, and co-founded OpenStack. Now building multi-agent AI systems that solve problems single agents can\'t.',

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
    { title: 'CTO', org: 'NTT', years: '2018-2020' },
    { title: 'CTO & VP Operations', org: 'Rackspace', years: '2000-2018' },
    { title: 'Co-founder', org: 'Internet Direct', years: '1995-2000' },
  ],

  expertise: ['Agentic AI', 'Multi-Agent Systems', 'Cyber Security', 'Quantum Computing and Post-Quantum Cryptography', 'Edge Computing'],

  contact: 'DM on X (https://x.com/jengates) or connect on LinkedIn (https://www.linkedin.com/in/jengates/)',

  // Resources organized by category, sourced from engateshome.jengates.workers.dev
  resources: {
    articles: [
      { title: 'The Stakes and Stages of Post-Quantum Zero Trust', source: 'Cloudflare Blog', year: '2024', url: 'https://blog.cloudflare.com/post-quantum-zero-trust/' },
      { title: 'The Internet is at Risk Without Proper Control Over Web Scraping', source: 'The Hindu', year: '2024', url: 'https://www.thehindu.com/sci-tech/technology/the-internet-is-at-risk-without-proper-control-over-web-scraping-cloudflare-top-exec/article68917366.ece' },
      { title: 'Why Your Cloud Security Strategy May Be Obsolete by 2025', source: 'Tahawul Tech', year: '2024', url: 'https://www.tahawultech.com/features/why-your-cloud-security-strategy-may-be-obsolete-by-2025-and-what-to-do-about-it/' },
      { title: 'The Last Frontier of Cloud Transformation', source: 'Wall Street Journal', year: '2023', url: 'https://partners.wsj.com/cloudflare/the-need-for-a-new-kind-of-cloud/the-last-frontier-of-cloud-transformation/' },
      { title: '5 Strategies for CIO Success in 2023', source: 'The Enterprisers Project', year: '2023', url: 'https://enterprisersproject.com/article/2023/1/5-strategies-cio-success-2023' },
      { title: 'The Rise of Chief Zero Trust Officer', source: 'Intelligent CIO', year: '2023', url: 'https://www.intelligentcio.com/north-america/2023/01/03/the-rise-of-chief-zero-trust-officer/' },
      { title: 'APIs: Understanding the Business Benefits and Risks', source: 'MIT Sloan Management Review', url: 'https://sloanreview.mit.edu/sponsors-content/apis-understanding-the-business-benefits-and-risks/' },
      { title: 'Five Great (free!) Ways to Get Started With Cloudflare', source: 'Cloudflare Blog', year: '2021', url: 'https://blog.cloudflare.com/five-free-ways-to-get-started-with-cloudflare/' },
      { title: 'Smartphone security\'s dirty little secret', source: 'BBC', year: '2012', url: 'https://www.bbc.com/news/business-17222816' },
    ],

    interviews: [
      { title: 'CIO Influence Interview -- Field CTO at Cloudflare', source: 'CIO Influence', year: '2023', url: 'https://cioinfluence.com/cloud/cio-influence-interview-with-john-engates-field-chief-technology-officer-at-cloudflare/' },
      { title: 'PBS NewsHour -- Healthcare.gov expert commentary', source: 'PBS', year: '2013', url: 'https://www.pbs.org/newshour/show/will-there-be-more-complications-to-the-health-care-website' },
    ],

    speakingAndPodcasts: [
      { title: 'Cloudflare TV Security Week -- Post-Quantum Cryptography', year: '2025', url: 'https://cloudflare.tv/shows/security-week/secure-your-future-upgrade-to-post-quantum-cryptography-with-zero-trust/AZEB3Gg6' },
      { title: 'Software in Blue Podcast, Ep 38', year: '2025', url: 'https://www.softwareinblue.com/episode38/' },
      { title: 'TechStrong TV -- Connectivity Cloud Transformation', year: '2024', url: 'https://techstrong.tv/videos/the-last-great-cloud-transformation/connectivity-cloud-the-last-great-cloud-transformation-ep1' },
      { title: 'Cloudflare TV -- CTO Perspectives on Cyber Threats', year: '2024', url: 'https://cloudflare.tv/this-week-in-net/cto-perspectives-on-the-cyber-threat-landscape/8aqKG6gW' },
      { title: 'Cloud Control Podcast -- Internet Infrastructure (Spotify)', year: '2023', url: 'https://open.spotify.com/episode/5dEjCzcn27kiuxOnLr76JE' },
      { title: 'InsideDT Podcast, Ep 25 -- AI & Enterprise Cybersecurity', year: '2023', url: 'https://podcasts.apple.com/be/podcast/s1-e25-cloudflares-john-engates-the-impact-of-ai/id1657857948?i=1000624747816' },
      { title: 'alphalist CTO Podcast, Ep 75 -- AI and DevOps', year: '2023', url: 'https://alphalist.com/podcast/75-john-engates-field-cto-cloudflare' },
      { title: 'Potsdam Conference for National Cybersecurity -- Keynote', year: '2023', url: 'https://hpi.de/fileadmin/user_upload/060_News/2023/10-Jahre-Potsdamer-Konferenz-fuer-Nationale-CyberSicherheit/230413_Tagungsunterlagen_Sicherheitskonferenz_innen_DE_web.pdf' },
      { title: 'This Week in Enterprise Tech, Ep 530 -- Passwordless Auth', year: '2023', url: 'https://twit.tv/shows/this-week-in-enterprise-tech/episodes/530' },
      { title: 'Cloudflare TV -- Log4j Incident Response', year: '2022', url: 'https://cloudflare.tv/event/behind-the-scenes-incident-response-at-cloudflare/PZ5GzMv2' },
      { title: 'Cloud Talk Podcast -- Zero Trust Implementation', year: '2022', url: 'https://www.rackspace.com/solve/zero-trust-everywhere' },
      { title: 'ISSA International Conference -- Keynote', year: '2022', url: 'https://issa.org/event/secure-your-future-internet-native-architecture-helps-you-transform-your-business-faster/' },
      { title: 'Congressional Testimony -- House Oversight Committee on Cloud', year: '2015', url: 'https://oversight.house.gov/hearing/oversight-it-subcommittee-committee-to-examine-cloud-solutions/' },
      { title: 'GigaOM Structure 2013 Conference', year: '2013', url: 'https://www.youtube.com/watch?v=W5M8yt5gCw0&list=PLCLrzcAZ57SXu-5Gv03Zo4X7YtnQLmri5&index=7' },
      { title: 'FutureStack13 Keynote (with Steve Wozniak)', year: '2013', url: 'https://newrelic.com/de/press-releases/20130716' },
    ],

    healthcareGovCoverage: [
      { title: 'The Inside Scoop on How Healthcare.gov is Getting Fixed', source: 'InfoWorld', url: 'https://www.infoworld.com/article/2171830/the-inside-scoop-on-how-healthcare-gov-is-getting-fixed.html' },
      { title: 'White House Woos Healthcare.gov Critic with Private Briefing', source: 'CBS News', url: 'https://www.cbsnews.com/news/white-house-woos-healthcaregov-critic-with-private-briefing/' },
      { title: 'The Key Test for Healthcare.gov is the Part You Can\'t See', source: 'NPR', url: 'https://www.npr.org/sections/alltechconsidered/2013/12/01/248078217/the-key-test-for-healthcare-gov-is-the-part-you-cant-see' },
      { title: 'The Healthcare.gov Tech Surge is Racing Against the Clock', source: 'NPR', url: 'https://www.npr.org/sections/alltechconsidered/2013/10/22/239220962/the-healthcare-gov-tech-surge-is-racing-against-the-clock' },
      { title: 'Tech Experts Say Health Care Site Needs utilization Overhaul', source: 'USA Today', url: 'https://www.usatoday.com/story/news/politics/2013/11/27/tech-experts-health-care-site/3771901/' },
      { title: 'Rackspace CTO Engates Analyzes Healthcare.gov Meltdown', source: 'InformationWeek', url: 'https://www.informationweek.com/machine-learning-ai/rackspace-cto-engates-analyzes-healthcare-gov-meltdown' },
    ],

    projects: [
      { title: 'Post Quantum Cryptography Checker', desc: 'Scan URLs for quantum-vulnerable cryptography', github: 'https://github.com/JohnEngates/check-pqc', live: 'https://checkpqc.com' },
      { title: 'Post Quantum Readiness Assessment', desc: 'Survey tool for organizational PQC preparedness', github: 'https://github.com/JohnEngates/pqcsurvey' },
      { title: 'Daikin AC Control CLI', desc: 'Python CLI for Daikin air conditioning control', github: 'https://github.com/JohnEngates/daikin-ac-control' },
      { title: 'Tempest Game', desc: 'Browser-based vector graphics arcade game', github: 'https://github.com/JohnEngates/tempest-game' },
      { title: 'Spotify Playlist Importer', desc: 'Automate playlist creation and management', github: 'https://github.com/JohnEngates/spotify-playlist-importer' },
      { title: 'Temperature Grapher', desc: 'Collect and visualize sensor temperature data', github: 'https://github.com/JohnEngates/temperature-graphing-script' },
    ],

    recognition: [
      { title: 'Frost Bank Board Profile', url: 'https://www.frostbank.com/leadership/john-engates' },
      { title: 'SABJ Tech Flash Titans Award (2014)', url: 'https://www.bizjournals.com/sanantonio/blog/2014/11/sabjs-inaugural-tech-flash-titans-award-winners.html' },
      { title: 'Edward Engates Memorial Scholarship at UTSA', url: 'https://utsa.academicworks.com/opportunities/11431' },
      { title: 'OpenStack History & Origins', url: 'https://docs.openstack.org/project-team-guide/introduction.html' },
      { title: 'Complete Podcast Appearance History', url: 'https://podcastdetails.com/people?q=John+Engates' },
    ],
  },
};

function generate() {
  const now = new Date().toISOString();

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.summary}`,
    '',
    `- **Source**: [${site.url}](${site.url})`,
    `- **Full site**: [${site.mainSite}](${site.mainSite})`,
    `- **Generated**: ${now}`,
    '',
    '---',
    '',
    '## About',
    '',
    site.bio,
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
    '---',
    '',
    '## Articles & Publications',
    '',
    ...site.resources.articles.map(a =>
      `- [${a.title}](${a.url})${a.source ? ` -- ${a.source}` : ''}${a.year ? ` (${a.year})` : ''}`
    ),
    '',
    '## Interviews',
    '',
    ...site.resources.interviews.map(i =>
      `- [${i.title}](${i.url})${i.source ? ` -- ${i.source}` : ''}${i.year ? ` (${i.year})` : ''}`
    ),
    '',
    '## Speaking & Podcasts',
    '',
    ...site.resources.speakingAndPodcasts.map(s =>
      `- [${s.title}](${s.url})${s.year ? ` (${s.year})` : ''}`
    ),
    '',
    '## Healthcare.gov Crisis Coverage (2013)',
    '',
    'John was called to the White House to advise on rescuing Healthcare.gov during its critical launch crisis. Coverage from major outlets:',
    '',
    ...site.resources.healthcareGovCoverage.map(h =>
      `- [${h.title}](${h.url})${h.source ? ` -- ${h.source}` : ''}`
    ),
    '',
    '## Projects',
    '',
    ...site.resources.projects.map(p => {
      let line = `- **${p.title}** -- ${p.desc}`;
      if (p.github) line += ` | [GitHub](${p.github})`;
      if (p.live) line += ` | [Live](${p.live})`;
      return line;
    }),
    '',
    '## Recognition & References',
    '',
    ...site.resources.recognition.map(r => `- [${r.title}](${r.url})`),
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
