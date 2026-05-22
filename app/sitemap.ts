import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://redsealenglish.com',
      lastModified: new Date(),
    },
  ]
}
