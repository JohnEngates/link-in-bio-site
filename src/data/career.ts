export interface Role {
  dates: string;
  title: string;
  org: string;
  url?: string;
  short: string;
  long: string[];
}

export const career: Role[] = [
  {
    dates: '2025 – now',
    title: 'Independent researcher',
    org: 'exAgentica',
    url: 'https://exagentica.ai/',
    short:
      'My personal agentic AI lab. I build multi-agent systems, try to break them, and write up what I learn.',
    long: [
      'exAgentica is my personal agentic AI lab. I build multi-agent systems and then try to break them, looking at coordination, security, and control. I work with coding agents, run models on my own hardware, and publish what I learn as Field Notes.',
    ],
  },
  {
    dates: '2021 – 2025',
    title: 'VP and Field Chief Technology Officer',
    org: 'Cloudflare',
    url: 'https://www.cloudflare.com/',
    short:
      'Started and led the Field CTO team, advising enterprises and public sector organizations on Zero Trust, AI, and post-quantum readiness.',
    long: [
      'I started and led the Field CTO organization at Cloudflare. My team advised large enterprises and public sector institutions on cybersecurity, Zero Trust and SASE, and newer topics like AI and post-quantum cryptography.',
      'I also wrote for the Cloudflare Blog and theNET, and spoke at Cloudflare events and on Cloudflare TV.',
    ],
  },
  {
    dates: '2018 – 2020',
    title: 'Client Chief Technology Officer',
    org: 'NTT Global Networks',
    url: 'https://www.global.ntt/',
    short:
      'Worked with enterprise clients on network and security technology across NTT’s global infrastructure.',
    long: [
      'I worked with enterprise clients of one of the world’s largest telecommunications companies, helping them adopt new network and security technologies across NTT’s global infrastructure.',
    ],
  },
  {
    dates: '2000 – 2018',
    title: 'Chief Technology Officer',
    org: 'Rackspace',
    url: 'https://www.rackspace.com/',
    short:
      'Joined in 2000 as VP of Operations and became CTO in 2002. Early YouTube hosting, the 2008 IPO, RackLabs, and OpenStack.',
    long: [
      'I joined Rackspace in August 2000 as VP of Operations and became CTO in 2002, as the company grew from a startup into a public company. I launched the Intensive Hosting division, which ran some of the most demanding workloads on the web, including YouTube in its early days, back when “the cloud” meant physical servers in real data centers.',
      'I helped build Fanatical Support, the around-the-clock expert help that became the company’s identity. Rackspace went public on the New York Stock Exchange on August 8, 2008.',
      'I created and led RackLabs, the team that built Rackspace’s answer to Amazon S3. I recruited the engineers, showed the work to early customer prospects, and made the case inside the company that we could build a distributed storage system of our own. It was later released as open source and became OpenStack Swift, which now runs at CERN, Wikimedia, and hundreds of other deployments.',
      'When Frank Frankovsky at Facebook called to ask whether Rackspace might want to help start the Open Compute Project, I got us involved. Rackspace became a founding member and a big part of the project, and I joined its board in 2017.',
    ],
  },
  {
    dates: '1995 – 2000',
    title: 'Co-founder and General Manager',
    org: 'Internet Direct',
    short:
      'One of the first Internet service providers in Texas, serving the San Antonio area.',
    long: [
      'I was one of the co-founders of Internet Direct, one of the first Internet service providers in Texas. We grew to more than 10,000 customers in the San Antonio area, and it is where I learned how Internet infrastructure scales and how it fails.',
    ],
  },
];

export const milestones = [
  {
    year: '2015',
    title: 'Congressional testimony',
    text: 'I testified before the House Committee on Oversight and Government Reform at “The State of the Cloud,” a field hearing held at UTSA, alongside leaders from AWS, VMware, and DHS.',
  },
  {
    year: '2013',
    title: 'Healthcare.gov',
    text: 'When the Healthcare.gov launch failed, I was called to the Obama White House. On November 25, 2013 I sat in the Situation Room with Jeffrey Zients, Steven VanRoekel, Todd Park, and others to review the plan to fix it.',
  },
  {
    year: '2010',
    title: 'OpenStack',
    text: 'Rackspace and NASA launched OpenStack. The object storage half came from the system my RackLabs team had built, now known as Swift.',
  },
  {
    year: '2008',
    title: 'Rackspace IPO',
    text: 'Rackspace listed on the New York Stock Exchange on August 8, 2008.',
  },
];

export const recognition = [
  {
    title: 'Alumnus of the Year',
    org: 'University of Texas at San Antonio',
    year: '2014',
  },
  {
    title: 'CTO of the Year, Tech Flash Titans Award',
    org: 'San Antonio Business Journal',
    year: '2014',
    url: 'https://www.bizjournals.com/sanantonio/blog/2014/11/sabjs-inaugural-tech-flash-titans-award-winners.html',
  },
];

export const education = {
  degree: 'Bachelor of Business Administration',
  school: 'University of Texas at San Antonio',
};
