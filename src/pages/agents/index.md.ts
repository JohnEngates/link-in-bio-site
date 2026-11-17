import type { APIRoute } from 'astro';
import { full } from '../../lib/markdown';

export const GET: APIRoute = () =>
  new Response(full(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
