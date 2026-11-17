// Plain-text renderings of the site for agents and LLMs, built from the same
// data the pages use so they cannot drift from what visitors see.
import { site, shortBio, speakerBio } from '../data/site';
import { career, milestones, recognition, education } from '../data/career';
import { boards, advisory } from '../data/boards';
import { topics, appearances } from '../data/speaking';
import { articles, coverage, healthcareGov } from '../data/press';

const link = (label: string, url?: string) => (url ? `[${label}](${url})` : label);

export function summary(): string {
  return [
    `# ${site.name}`,
    '',
    `> ${shortBio}`,
    '',
    '## Pages',
    '',
    `- [About](${site.url}/about/): narrative bio and career`,
    `- [Speaking](${site.url}/speaking/): topics and past appearances`,
    `- [Boards & advisory](${site.url}/boards/): board service and advisory work`,
    `- [Writing & press](${site.url}/press/): articles, coverage, and press kit`,
    `- [Full markdown](${site.url}/llms-full.txt): everything on this site as one file`,
    '',
    '## Elsewhere',
    '',
    `- [exAgentica](${site.lab}): John's personal agentic AI lab and current writing`,
    `- [LinkedIn](${site.social.linkedin})`,
    `- [X](${site.social.x})`,
    `- [GitHub](${site.social.github})`,
    '',
    `Contact: ${site.email}`,
    '',
  ].join('\n');
}

export function full(): string {
  const out: string[] = [
    `# ${site.name}`,
    '',
    `> ${shortBio}`,
    '',
    `Location: ${site.location}. Contact: ${site.email}. Current work: ${site.lab}`,
    '',
    '## Bio',
    '',
    ...speakerBio.flatMap((p) => [p, '']),
    '## Career',
    '',
  ];
  for (const r of career) {
    out.push(`### ${r.title}, ${link(r.org, r.url)} (${r.dates})`, '', ...r.long.flatMap((p) => [p, '']));
  }
  out.push('## Milestones', '');
  for (const m of milestones) out.push(`- ${m.year}: ${m.title}. ${m.text}`);
  out.push('', '## Board service', '');
  for (const b of boards) out.push(`- ${link(b.org, b.url)} (${b.meta}). ${b.role}. ${b.text}`);
  out.push('', '## Advisory and community', '');
  for (const a of advisory) out.push(`- ${link(a.org, a.url)}: ${a.role}. ${a.text}`);
  out.push('', '## Recognition', '');
  for (const r of recognition) out.push(`- ${r.title}, ${r.org} (${r.year})`);
  out.push('', '## Education', '', `${education.degree}, ${education.school}`, '', '## Speaking topics', '');
  for (const t of topics) out.push(`- ${t.title}. ${t.text}`);
  out.push('', '## Appearances', '');
  for (const g of appearances) {
    for (const a of g.items) out.push(`- ${g.year}: ${link(a.title, a.url)} (${a.kind}; ${a.context}). ${a.text}`);
  }
  out.push('', '## Articles', '');
  for (const a of articles) out.push(`- ${link(a.title, a.url)}, ${[a.source, a.date].filter(Boolean).join(', ')}`);
  out.push('', '## Interviews and coverage', '');
  for (const a of [...coverage, ...healthcareGov]) out.push(`- ${link(a.title, a.url)}, ${a.source}, ${a.date}`);
  out.push('');
  return out.join('\n');
}
