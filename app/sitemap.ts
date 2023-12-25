import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hex-cal.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://hex-cal.vercel.app/calculator",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://hex-cal.vercel.app/converter",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://hex-cal.vercel.app/compliment",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://hex-cal.vercel.app/settings",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
