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
      <div className="relative h-full w-full bg-black">
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px]  w-full rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {images.map((image) => (
              <div key={image.id} className="duration-200 hover:scale-110">
                <img
                  src={image.url}
                  alt="image"
                  className="h-auto max-w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
