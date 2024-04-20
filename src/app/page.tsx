/* eslint-disable @next/next/no-img-element */
const mockUrls = [
  "https://stsci-opo.org/STScI-01HQNVFG4DPEVRZC18XTF2QBCG.png",
  "https://stsci-opo.org/STScI-01HRD5591YGCDZ4YWZNHZX4BMK.png",
  "https://stsci-opo.org/STScI-01HQ6CN7CCP7X4DQCW7KTMWSZ6.png",
  "https://stsci-opo.org/STScI-01HQNVFG4DPEVRZC18XTF2QBCG.png",
  // "https://stsci-opo.org/STScI-01HNGANZVXNJY9P8CBNAPX12TR.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap justify-between gap-4 p-5">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" className="h-48 w-48" />
          </div>
        ))}
      </div>
      <h1 className="p-4 text-center text-2xl">(gallery in progress...)</h1>
    </main>
  );
}
