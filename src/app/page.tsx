/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { db } from "~/server/db";
export const dynamic = "force-dynamic";

/* eslint-disable @next/next/no-img-element */
const mockUrls = [
  "https://stsci-opo.org/STScI-01HQNVFG4DPEVRZC18XTF2QBCG.png",
  "https://stsci-opo.org/STScI-01HRD5591YGCDZ4YWZNHZX4BMK.png",
  "https://stsci-opo.org/STScI-01HQ6CN7CCP7X4DQCW7KTMWSZ6.png",
  "https://stsci-opo.org/STScI-01HQNVFG4DPEVRZC18XTF2QBCG.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap justify-between gap-2 p-5">
        {posts.map((post) => (
          <div key={post.id} className="w-40 border-2 border-white">
            <div
              key={post.id}
              className="h-48 w-48 cursor-pointer transition-all duration-700 hover:scale-125"
            >
              {post.name}
            </div>
          </div>
        ))}
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-40">
            <img
              src={image.url}
              alt="image"
              className="h-48 w-48 cursor-pointer transition-all duration-700 hover:scale-125"
            />
          </div>
        ))}
      </div>
      <h1 className="p-4 text-center text-2xl">(gallery in progress...)</h1>
    </main>
  );
}
