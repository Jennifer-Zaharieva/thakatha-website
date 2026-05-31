/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow remote images from the existing CDN and any Supabase project.
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
  },
};

export default nextConfig;
