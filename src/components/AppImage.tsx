import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/basePath";

// Drop-in replacement for next/image that prefixes local src paths with
// basePath (see src/lib/basePath.ts for why this is needed).
export default function AppImage({ src, ...props }: ImageProps) {
  const finalSrc = typeof src === "string" ? withBasePath(src) : src;
  // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and forwarded via props
  return <Image src={finalSrc} {...props} />;
}
