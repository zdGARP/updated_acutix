import { NextResponse } from 'next/server';

export const GET = async () => {
  const content = `
User-agent: *
Disallow: /admin/
Disallow: /api/
Sitemap: https://www.acutixsoft.com/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};
