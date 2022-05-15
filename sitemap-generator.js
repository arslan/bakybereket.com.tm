// import { configureSitemap } from '@sergeymyssak/nextjs-sitemap';
const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

const Sitemap = configureSitemap({
  domains: [{ domain: 'bakybereket.com.tm', defaultLocale: 'ru', locales:['en', 'tk'], http: false }],
  exclude: ['/api/*'],
  excludeIndex: true,
  trailingSlash: true,
  targetDirectory: __dirname + '/public',
  pagesDirectory: __dirname + '/pages',
});

Sitemap.generateSitemap();
