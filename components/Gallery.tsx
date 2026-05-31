"use client";

import { useState } from "react";
import { imageUrl, type GalleryImage } from "@/lib/images";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => {
          const src = imageUrl(img.file, img.fallback);
          return (
            <button
              key={img.file}
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden bg-line/40 outline-none"
              style={{ aspectRatio: `${img.w} / ${img.h}` }}
              aria-label={`View ${img.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
              />
            </button>
          );
        })}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 text-xs uppercase tracking-label text-bone/70 hover:text-bone"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl(images[active].file, images[active].fallback)}
            alt={images[active].alt}
            className="max-h-[88vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
