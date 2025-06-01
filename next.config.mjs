/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static asset compression
  compress: true,
  // Configure image optimization
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
  },
  // Ensure proper handling of video files
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;
