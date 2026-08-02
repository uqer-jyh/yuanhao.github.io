import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/yuanhao.github.io" : "",
  assetPrefix: isGithubActions ? "/yuanhao.github.io/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
