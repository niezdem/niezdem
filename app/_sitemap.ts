export default async function sitemap() {
  const routes = ['', '/contact', '/countries', '/games'].map((route) => ({
    url: `https://niezdem.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  return [...routes];
}
