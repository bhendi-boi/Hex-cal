import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hex-cal.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://hex-cal.vercel.app/calculator",
      lastModified: new Date(),
    },
    {
      url: "https://hex-cal.vercel.app/converter",
      lastModified: new Date(),
    },
    {
      url: "https://hex-cal.vercel.app/compliment",
      lastModified: new Date(),
    },
    {
      url: "https://hex-cal.vercel.app/settings",
      lastModified: new Date(),
    },
  ];
}
