
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "/gallery/image1.png",
  "/gallery/photo1.png",
  "/gallery/photo2.png",
  "/gallery/photo3.png",
  "/gallery/photo4.png",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (photos.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  if (photos.length === 0) return null;

  return (
    <main className="w-full bg-white px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
      <section
        className="relative mx-auto w-full max-w-7xl"
        aria-label="Photo gallery"
      >
        {/* Responsive Photo Slider */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-md sm:aspect-[16/9] sm:rounded-2xl lg:aspect-[21/9]">
          {photos.map((photo, index) => (
            <div
              key={photo}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current
                  ? "z-10 opacity-100"
                  : "z-0 opacity-0"
              }`}
              aria-hidden={index !== current}
            >
              <img
                src={photo}
                alt={`Gallery photo ${index + 1}`}
                className="h-full w-full object-cover"
                loading="eager"
                draggable="false"
              />
            </div>
          ))}

          {/* Previous Button */}
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70 sm:left-4 sm:p-3"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70 sm:right-4 sm:p-3"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Slide Indicators */}
        {photos.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to photo ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-7 bg-neutral-800"
                    : "w-2 bg-neutral-300 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
