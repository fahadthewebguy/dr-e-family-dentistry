// Mirrors the basePath computed in next.config.ts. next/image's `src` isn't
// auto-prefixed with basePath when images.unoptimized is true, so local image
// paths need to go through withBasePath() explicitly (see AppImage.tsx).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!basePath || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${basePath}${path}`;
}
