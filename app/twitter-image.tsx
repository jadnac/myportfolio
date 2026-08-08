import { buildOgImage, ogImageSize } from "@/lib/ogImage";
import { profile } from "@/lib/data";

export const size = ogImageSize;
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.jobTitle}`;

export default function Image() {
  return buildOgImage();
}
