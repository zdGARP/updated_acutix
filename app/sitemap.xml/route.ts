import { NextResponse } from 'next/server';

export const GET = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.acutixsoft.com/</loc>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://www.acutixsoft.com/services</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.acutixsoft.com/careers</loc>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://www.acutixsoft.com/blogs</loc>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://www.acutixsoft.com/about</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.acutixsoft.com/contact</loc>
      <priority>0.7</priority>
    </url>
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
