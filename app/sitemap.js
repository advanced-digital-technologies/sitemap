import { getData } from "@/utils/api";
import {
  ticketsRoute,
  recommendationsRoute,
  destinationsRoute,
} from "@/utils/routes";
import { notFound } from "next/navigation";

const BASE_URL = process.env.BASE_URL;

export async function generateSitemaps() {
  const sitemaps = [{ id: "general" }];

  return sitemaps;
}

export default async function sitemap({ id }) {
  if (id === "general") {
    return [
      {
        url: "/",
        lastModified: new Date(),
        alternates: {
          languages: {
            "en-US": "/en",
            "de-DE": "/de",
            "ar-EG": "/ar",
            "ru-RU": "/ru",
          },
        },
        changeFrequency: "always",
        priority: 1,
      },
      {
        url: "/terms",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: "/privacy",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
      },
    ];
  }

  return null;
}
