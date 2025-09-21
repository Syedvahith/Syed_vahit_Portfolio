import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = '/Syed_vahit_Portfolio'

const nextConfig: NextConfig = {
  output: 'export',
  // basePath should not be used with assetPrefix for GitHub Pages deployment like this.
  // The assetPrefix is sufficient for linking assets correctly.
  assetPrefix: isGithubActions ? repoName : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
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
