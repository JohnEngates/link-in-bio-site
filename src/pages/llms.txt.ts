import type { APIRoute } from 'astro';
import { summary } from '../lib/markdown';

export const GET: APIRoute = () =>
  new Response(summary(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
