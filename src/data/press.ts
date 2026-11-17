export interface PressItem {
  title: string;
  source: string;
  date: string;
  text?: string;
  url: string;
  note?: string;
}

// Articles I wrote or co-wrote.
export const articles: PressItem[] = [
  {
    title: 'Conventional Cryptography Is Under Threat. Upgrade to Post-Quantum Cryptography with Cloudflare Zero Trust',
    source: 'Cloudflare Blog',
    date: 'Mar 2025',
    note: 'Co-authored',
    text: 'Why quantum computers threaten today’s encryption and how to move a Zero Trust architecture to post-quantum cryptography.',
    url: 'https://blog.cloudflare.com/post-quantum-zero-trust/',
  },
  {
    title: 'Why Your Cloud Security Strategy May Be Obsolete by 2025',
    source: 'Tahawul Tech',
    date: 'Jan 2025',
    text: 'The threats and architecture shifts that are leaving older cloud security approaches behind, and what to do about it.',
    url: 'https://www.tahawultech.com/features/why-your-cloud-security-strategy-may-be-obsolete-by-2025-and-what-to-do-about-it/',
  },
  {
    title: 'The Last Frontier of Cloud Transformation',
    source: 'The Wall Street Journal',
    date: '2023',
    note: 'Paid program',
    text: 'Compute and storage moved to the cloud years ago. The network is the part that is left.',
    url: 'https://partners.wsj.com/cloudflare/the-need-for-a-new-kind-of-cloud/the-last-frontier-of-cloud-transformation/',
  },
  {
    title: '5 Strategies for CIO Success in 2023',
    source: 'The Enterprisers Project',
    date: 'Jan 2023',
    text: 'Priorities for technology leaders, from security to resilient architecture.',
    url: 'https://enterprisersproject.com/article/2023/1/5-strategies-cio-success-2023',
  },
  {
    title: 'The Rise of the Chief Zero Trust Officer',
    source: 'Intelligent CIO',
    date: 'Jan 2023',
    text: 'Why organizations are giving Zero Trust a dedicated executive owner.',
    url: 'https://www.intelligentcio.com/north-america/2023/01/03/the-rise-of-chief-zero-trust-officer/',
  },
  {
    title: 'Five Great (Free!) Ways to Get Started With Cloudflare',
    source: 'Cloudflare Blog',
    date: 'Nov 2021',
    text: 'A beginner’s guide I wrote in my first months at Cloudflare.',
    url: 'https://blog.cloudflare.com/five-free-ways-to-get-started-with-cloudflare/',
  },
];

export const authorPages = [
  { source: 'Cloudflare Blog', url: 'https://blog.cloudflare.com/author/john-engates/' },
  { source: 'DevOps.com', url: 'https://devops.com/author/john-engates/' },
  { source: 'The Enterprisers Project', url: 'https://enterprisersproject.com/user/john-engates' },
];

// Interviews, webinars, and coverage by others.
export const coverage: PressItem[] = [
  {
    title: 'The Internet Is at Risk Without Proper Control Over Web Scraping',
    source: 'The Hindu',
    date: 'Dec 2024',
    text: 'Interview on bots, AI crawlers, and what uncontrolled scraping does to the people who publish on the web.',
    url: 'https://www.thehindu.com/sci-tech/technology/the-internet-is-at-risk-without-proper-control-over-web-scraping-cloudflare-top-exec/article68917366.ece',
  },
  {
    title: 'CIO Influence Interview with John Engates',
    source: 'CIO Influence',
    date: 'Jun 2023',
    text: 'Zero Trust, DDoS mitigation, shadow IT, and the role of AI in security.',
    url: 'https://cioinfluence.com/cloud/cio-influence-interview-with-john-engates-field-chief-technology-officer-at-cloudflare/',
  },
  {
    title: 'APIs: Understanding the Business Benefits and Risks',
    source: 'MIT Sloan Management Review',
    date: 'Jun 2023',
    note: 'Sponsored webinar',
    text: 'A one-hour webinar with my Cloudflare colleague Saikrishna Chavali on what business leaders need to understand about APIs.',
    url: 'https://sloanreview.mit.edu/sponsors-content/apis-understanding-the-business-benefits-and-risks/',
  },
  {
    title: 'Small Businesses Harness the Power of Cloud Computing',
    source: 'BBC News',
    date: '2012',
    text: 'Quoted on what cloud computing means for small and medium-sized businesses.',
    url: 'https://www.bbc.com/news/business-17222816',
  },
];

// National coverage during the Healthcare.gov recovery, 2013.
export const healthcareGov: PressItem[] = [
  {
    title: 'The Inside Scoop on How Healthcare.gov Is Getting Fixed',
    source: 'InfoWorld',
    date: '2013',
    url: 'https://www.infoworld.com/article/2171830/the-inside-scoop-on-how-healthcare-gov-is-getting-fixed.html',
  },
  {
    title: 'White House Woos Healthcare.gov Critic With Private Briefing',
    source: 'CBS News',
    date: '2013',
    url: 'https://www.cbsnews.com/news/white-house-woos-healthcaregov-critic-with-private-briefing/',
  },
  {
    title: 'Will the Rush to Correct the Health Care Website Problems Add More Complication?',
    source: 'PBS NewsHour',
    date: '2013',
    url: 'https://www.pbs.org/newshour/show/will-there-be-more-complications-to-the-health-care-website',
  },
  {
    title: 'The Key Test for Healthcare.gov Is the Part You Can’t See',
    source: 'NPR',
    date: 'Dec 2013',
    url: 'https://www.npr.org/sections/alltechconsidered/2013/12/01/248078217/the-key-test-for-healthcare-gov-is-the-part-you-cant-see',
  },
  {
    title: 'The Healthcare.gov “Tech Surge” Is Racing Against the Clock',
    source: 'NPR',
    date: 'Oct 2013',
    url: 'https://www.npr.org/sections/alltechconsidered/2013/10/22/239220962/the-healthcare-gov-tech-surge-is-racing-against-the-clock',
  },
  {
    title: 'Rackspace CTO Engates Analyzes Healthcare.gov Meltdown',
    source: 'InformationWeek',
    date: '2013',
    url: 'https://www.informationweek.com/machine-learning-ai/rackspace-cto-engates-analyzes-healthcare-gov-meltdown',
  },
];

export const alsoCovered = ['CNN', 'USA Today', 'The Wall Street Journal', 'The Washington Post', 'Forbes'];
