import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  // Apply 'export' only when building for GitHub Pages
  ...(isGithubActions ? { output: 'export' } : {}),
  assetPrefix: isGithubActions ? '/Syed_vahit_Portfolio/' : undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
