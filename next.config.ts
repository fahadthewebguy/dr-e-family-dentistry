import type { NextConfig } from "next";

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/ —
// everything needs to be prefixed with the repo name when built in CI there.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "dr-e-family-dentistry";

const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  // Emit directory-style routes (services/index.html) so GitHub Pages resolves
  // both /services and /services/ — without this, static export emits
  // services.html and trailing-slash URLs 404.
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  env: {
    // next/image's src isn't auto-prefixed with basePath when unoptimized,
    // so components read this via src/lib/basePath.ts to prefix it themselves.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
