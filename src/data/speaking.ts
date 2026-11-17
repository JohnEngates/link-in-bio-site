export const topics = [
  {
    title: 'Agents are a distributed systems problem',
    text: 'Give software judgment, tools, and memory, and a local mistake can become a system failure. What 30 years of infrastructure taught me about coordination, blast radius, and control.',
  },
  {
    title: 'AI and cyber questions for the boardroom',
    text: 'What directors should ask about AI agents and cyber risk, and how to tell a good answer from a comfortable one. Drawn from my own board work.',
  },
  {
    title: 'Security when the users are machines',
    text: 'Machine identity, Zero Trust, and post-quantum cryptography. Which permissions an agent should inherit, and which it should have to earn.',
  },
  {
    title: 'Lessons from scaling the Internet',
    text: 'Stories from Rackspace, OpenStack, Cloudflare, and the Healthcare.gov recovery, and what they say about the technology decisions leaders face now.',
  },
];

export type Kind = 'Keynote' | 'Panel' | 'Podcast' | 'Broadcast' | 'Testimony' | 'Event';

export interface Appearance {
  title: string;
  kind: Kind;
  context: string;
  text: string;
  url?: string;
  linkLabel?: string;
}

export const appearances: { year: string; items: Appearance[] }[] = [
  {
    year: '2025',
    items: [
      {
        title: 'Cloudflare Immerse Houston',
        kind: 'Keynote',
        context: 'Executive summit · Houston',
        text: 'Spoke to technology executives about the connectivity cloud and AI security.',
      },
      {
        title: 'Cloudflare Immerse Chicago',
        kind: 'Keynote',
        context: 'Executive summit · Chicago',
        text: 'Keynote on where the connectivity cloud is heading as AI moves to the edge.',
      },
      {
        title: 'Security Week: Post-Quantum Cryptography',
        kind: 'Panel',
        context: 'Cloudflare TV · June 2025',
        text: 'Panel with Sharon Goldberg and Bas Westerbaan on quantum threats and upgrading to post-quantum encryption with Zero Trust.',
        url: 'https://cloudflare.tv/shows/security-week/secure-your-future-upgrade-to-post-quantum-cryptography-with-zero-trust/AZEB3Gg6',
        linkLabel: 'Watch',
      },
      {
        title: 'Software in Blue',
        kind: 'Podcast',
        context: 'Episode 38 · January 2025',
        text: 'A long conversation about Rackspace during the early rise of AWS, how cloud and edge computing evolved, and AI inference at the edge.',
        url: 'https://www.softwareinblue.com/episode38/',
        linkLabel: 'Listen',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'The Last Great Cloud Transformation',
        kind: 'Broadcast',
        context: 'Techstrong TV · Episode 1 · September 2024',
        text: 'Co-hosted a series on the connectivity cloud and why network modernization is the unfinished part of cloud adoption.',
        url: 'https://techstrong.tv/videos/the-last-great-cloud-transformation/connectivity-cloud-the-last-great-cloud-transformation-ep1',
        linkLabel: 'Watch',
      },
      {
        title: 'LATAM CISO Summit',
        kind: 'Panel',
        context: 'Digi Americas · Costa Rica',
        text: 'Moderated “Enhancing Security through Frameworks” with panelists from NIST, TelevisaUnivision, and the Cyber Risk Institute.',
      },
      {
        title: 'CTO Perspectives on the Cyber Threat Landscape',
        kind: 'Broadcast',
        context: 'Cloudflare TV, This Week in NET · September 2024',
        text: 'Network infrastructure, post-quantum encryption, API protection, and the threats I was hearing about from customers.',
        url: 'https://cloudflare.tv/this-week-in-net/cto-perspectives-on-the-cyber-threat-landscape/8aqKG6gW',
        linkLabel: 'Watch',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        title: 'Potsdam Conference for National Cybersecurity',
        kind: 'Keynote',
        context: 'Hasso Plattner Institute, Germany · April 2023',
        text: 'Keynote at the tenth edition of Germany’s national cybersecurity conference, on the changing cyber threat landscape.',
        url: 'https://hpi.de/fileadmin/user_upload/060_News/2023/10-Jahre-Potsdamer-Konferenz-fuer-Nationale-CyberSicherheit/230413_Tagungsunterlagen_Sicherheitskonferenz_innen_DE_web.pdf',
        linkLabel: 'Program (PDF)',
      },
      {
        title: 'Cloud Control',
        kind: 'Podcast',
        context: 'Building a Better Internet · September 2023',
        text: 'How Internet infrastructure has changed and what modern platforms let developers build.',
        url: 'https://open.spotify.com/episode/5dEjCzcn27kiuxOnLr76JE',
        linkLabel: 'Listen',
      },
      {
        title: 'InsideDT',
        kind: 'Podcast',
        context: 'Season 1, Episode 25 · August 2023',
        text: 'The impact of AI on enterprise cybersecurity, including how attackers use AI for voice spoofing and deepfakes.',
        url: 'https://podcasts.apple.com/be/podcast/s1-e25-cloudflares-john-engates-the-impact-of-ai/id1657857948?i=1000624747816',
        linkLabel: 'Listen',
      },
      {
        title: 'Indianapolis CISO Town Hall',
        kind: 'Event',
        context: 'Evanta, a Gartner company · May 2023',
        text: 'Virtual session for regional CISOs on connecting security programs to business strategy.',
        url: 'https://www.evanta.com/ciso/indianapolis/indianapolis-ciso-town-hall-6680',
        linkLabel: 'Event',
      },
      {
        title: 'alphalist CTO Podcast',
        kind: 'Podcast',
        context: 'Episode 75 · April 2023',
        text: 'The Field CTO role, the evolution of DevOps since my Rackspace years, and where AI fits in.',
        url: 'https://alphalist.com/podcast/75-john-engates-field-cto-cloudflare',
        linkLabel: 'Listen',
      },
      {
        title: 'This Week in Enterprise Tech',
        kind: 'Broadcast',
        context: 'TWiT · Episode 530 · February 2023',
        text: 'Guest on “The Death of the Password,” covering passwordless authentication, ransomware recovery, and Zero Trust.',
        url: 'https://twit.tv/shows/this-week-in-enterprise-tech/episodes/530',
        linkLabel: 'Watch',
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        title: 'Zero Trust, Zero Nonsense',
        kind: 'Panel',
        context: 'Ortus Club executive summit · October 2022',
        text: 'Presented “The Network for Digital Transformation” and moderated the closing discussion on practical Zero Trust and ransomware.',
        url: 'https://www.ortusclub.com/dczero-trust-session/',
        linkLabel: 'Event',
      },
      {
        title: 'Behind the Scenes: Incident Response at Cloudflare',
        kind: 'Broadcast',
        context: 'Cloudflare TV · May 2022',
        text: 'With John Graham-Cumming, then Cloudflare’s CTO, on how the company responded to the Log4j vulnerability.',
        url: 'https://cloudflare.tv/event/behind-the-scenes-incident-response-at-cloudflare/PZ5GzMv2',
        linkLabel: 'Watch',
      },
      {
        title: 'ISSA International',
        kind: 'Keynote',
        context: 'Information Systems Security Association · March 2022',
        text: '“Secure Your Future,” on how Internet-native architecture helps a business change faster.',
        url: 'https://issa.org/event/secure-your-future-internet-native-architecture-helps-you-transform-your-business-faster/',
        linkLabel: 'Event',
      },
      {
        title: 'Cloud Talk',
        kind: 'Podcast',
        context: 'Rackspace · Zero Trust Everywhere · February 2022',
        text: 'Back on the Rackspace podcast to talk about putting Zero Trust into practice once the network perimeter is gone.',
        url: 'https://www.rackspace.com/solve/zero-trust-everywhere',
        linkLabel: 'Listen',
      },
    ],
  },
  {
    year: '2015',
    items: [
      {
        title: 'The State of the Cloud',
        kind: 'Testimony',
        context: 'U.S. House Committee on Oversight and Government Reform · September 22, 2015',
        text: 'Testified at a field hearing at UTSA alongside leaders from AWS, VMware, and DHS on why federal agencies were slow to adopt cloud computing.',
        url: 'https://oversight.house.gov/hearing/oversight-it-subcommittee-committee-to-examine-cloud-solutions/',
        linkLabel: 'Hearing record',
      },
      {
        title: 'NYSE Closing Bell',
        kind: 'Event',
        context: 'New York Stock Exchange · May 6, 2015',
        text: 'Rang the closing bell with the Rackspace team.',
      },
    ],
  },
  {
    year: '2013',
    items: [
      {
        title: 'White House meeting on Healthcare.gov',
        kind: 'Event',
        context: 'White House Situation Room · November 25, 2013',
        text: 'Invited with other technology leaders to review the “tech surge” plan for fixing Healthcare.gov. I visited the operations center and gave advice on contractor coordination, automation, and database performance.',
        url: 'https://www.infoworld.com/article/2171830/the-inside-scoop-on-how-healthcare-gov-is-getting-fixed.html',
        linkLabel: 'InfoWorld account',
      },
      {
        title: 'FutureStack13',
        kind: 'Keynote',
        context: 'New Relic · San Francisco · October 2013',
        text: 'Spoke at New Relic’s first FutureStack conference, on a program that also featured Steve Wozniak.',
        url: 'https://newrelic.com/de/press-releases/20130716',
        linkLabel: 'Press release',
      },
      {
        title: 'GigaOM Structure',
        kind: 'Keynote',
        context: 'San Francisco · 2013',
        text: 'On stage and on camera about cloud infrastructure and where it was heading.',
        url: 'https://www.youtube.com/watch?v=W5M8yt5gCw0&list=PLCLrzcAZ57SXu-5Gv03Zo4X7YtnQLmri5&index=7',
        linkLabel: 'Watch interview',
      },
    ],
  },
  {
    year: '2012',
    items: [
      {
        title: 'LSI Accelerating Innovation Summit',
        kind: 'Keynote',
        context: 'San Jose · November 2012',
        text: '“Rethinking Future Storage Strategies,” drawing on what we learned building OpenStack Swift.',
        url: 'https://www.prnewswire.com/news-releases/lsi-summit-convenes-technology-leaders-to-unlock-opportunities-in-the-new-innovation-era-of-devices-datacenters-and-mobile-networks-179097951.html',
        linkLabel: 'Press release',
      },
    ],
  },
];

export const podcastHistory = 'https://podcastdetails.com/people?q=John+Engates';
