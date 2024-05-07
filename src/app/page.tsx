/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { desc } from "drizzle-orm";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";

/* eslint-disable @next/next/no-img-element */

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap justify-between gap-2 p-5">
        {images.map((image, index) => (
          <div
            key={image.id + "-" + index}
            className="flex w-40 flex-col duration-700 hover:scale-125"
          >
            <img
              src={image.url}
              alt="image"
              className="h-48 w-48 cursor-pointer transition-all "
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      <h1 className="p-4 text-center text-2xl">(gallery in progress...)</h1>
    </main>
  );
}
