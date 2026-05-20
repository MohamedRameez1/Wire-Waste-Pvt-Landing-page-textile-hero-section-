import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type GalleryImage = {
  src: string;
  alt: string;
};

export function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Force glass navbar only on this page
  useEffect(() => {
    document.body.classList.add("force-glass-navbar");
    return () => {
      document.body.classList.remove("force-glass-navbar");
    };
  }, []);

  // ✅ Proper scroll reset (safe)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Fetch images (NO blocking preload → removes lag)
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data.gallery);
        setLoading(false);
      });
  }, []);

  // ✅ ESC key to close fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Navbar />

      {/* Fix navbar overlap */}
      <div style={{ paddingTop: "90px" }}>
        <div className="p-6" style={{ minHeight: "80vh" }}>
          <h1 className="text-2xl font-bold mb-6">Gallery</h1>

          {/* Loading state */}
          {loading ? (
            <div className="text-center py-20">Loading images...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  style={{ willChange: "transform" }} // smoother hover
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          )}

          {/* Fullscreen preview */}
          {selectedImage && (
            <div
              onClick={() => setSelectedImage(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                animation: "fadeIn 0.3s ease"
              }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  borderRadius: 12,
                  animation: "zoomIn 0.3s ease"
                }}
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  fontSize: 28,
                  color: "#fff",
                  background: "none",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes zoomIn {
            from { transform: scale(0.85); }
            to { transform: scale(1); }
          }
        `}
      </style>
    </>
  );
}