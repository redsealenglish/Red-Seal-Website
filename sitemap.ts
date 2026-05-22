import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://redsealenglish.com',
      lastModified: new Date(),
    },
    {
      url: 'https://redsealenglish.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://redsealenglish.com/contact',
      lastModified: new Date(),
    },
  ]
}
