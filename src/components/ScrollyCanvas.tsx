'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 120;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${frameIndex}_delay-0.066s.webp`;
        
        img.onload = () => {
            loadedCount++;
            if (loadedCount === frameCount) {
                setImages(loadedImages);
            }
        };
        // Error handling stub
        img.onerror = () => {
            loadedCount++;
        };
        loadedImages.push(img);
    }
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastRenderedIndex = -1;
    
    const render = () => {
        const index = Math.min(Math.max(Math.round(frameIndex.get()), 0), frameCount - 1);
        // Only draw if index actually changed to save performance
        if (index === lastRenderedIndex && window.innerWidth === canvas.width) {
             animationFrameId = requestAnimationFrame(render);
             return;
        }

        const image = images[index];
        if (image && image.complete) {
            const canvasAspect = canvas.width / canvas.height;
            const imgAspect = image.width / image.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasAspect > imgAspect) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgAspect;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawWidth = canvas.height * imgAspect;
                drawHeight = canvas.height;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
            lastRenderedIndex = index;
        }
        animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
         lastRenderedIndex = -1; // Force redraw
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animationFrameId = requestAnimationFrame(render);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, [images, frameIndex]);

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      {children}
    </section>
  );
}
