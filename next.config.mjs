// Static export (output: "export") makes the dev server over-validate the
// generated icon/OG-image routes (they 500 on every request/reload). It's
// only needed for `next build` — `next dev` works fine without it.
/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === "production" ? { output: "export" } : {}),
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
