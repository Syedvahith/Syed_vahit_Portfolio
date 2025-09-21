import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = '/Syed_vahit_Portfolio'

const nextConfig: NextConfig = {
  // Apply 'export' only when building for GitHub Pages
  ...(isGithubActions ? { output: 'export' } : {}),
  basePath: isGithubActions ? repoName : undefined,
  assetPrefix: isGithubActions ? repoName : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export with next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
