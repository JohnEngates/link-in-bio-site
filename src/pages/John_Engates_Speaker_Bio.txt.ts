import type { APIRoute } from 'astro';
import { speakerBio, shortBio } from '../data/site';

export const GET: APIRoute = () =>
  new Response(
    `John Engates\nSpeaker bio\n\n${speakerBio.join('\n\n')}\n\nShort version\n\n${shortBio}\n\nHeadshot: https://johnengates.com/engates_john.jpg\nMore: https://johnengates.com/press/\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
