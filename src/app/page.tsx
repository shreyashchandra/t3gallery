/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { desc } from "drizzle-orm";
import { db } from "~/server/db";
import { Footer } from "./_components/footer";
export const dynamic = "force-dynamic";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"


/* eslint-disable @next/next/no-img-element */

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  // Distribute images into boxes
  const imgBoxes: { id: number; name: string; url: string; userId: string; createdAt: Date; updatedAt: Date | null; }[][] = [[], [], [], []];

  images.forEach((image, index) => {
    imgBoxes[index % 4].push(image);
  });

  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-full rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
        <TooltipProvider>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {imgBoxes.map((box, boxIndex) => (
              <div key={boxIndex} className="grid gap-4">
                {box.map((image) => (
                  <Tooltip key={image.id}>
                    <TooltipTrigger asChild>
                      <div className="duration-200 hover:scale-110">
                        <img
                          src={image.url}
                          alt={image.name}
                          className="h-auto max-w-full rounded-lg"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{image.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            ))}
          </div>
        </TooltipProvider>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}



