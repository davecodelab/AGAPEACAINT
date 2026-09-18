export interface OptimizationResult {
  file: File;
  previewUrl: string;
  originalSize: number;
  optimizedSize: number;
  reductionPercentage: number;
  originalDimensions: { width: number; height: number };
  optimizedDimensions: { width: number; height: number };
  processingTimeMs: number;
}

export interface OptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number; // 0.1 to 1.0, recommended 0.82
  targetFormat?: "image/webp" | "image/jpeg";
}

/**
 * In-browser image compressor and optimizer.
 * Scales dimensions and converts to high-efficiency WebP format using HTML5 Canvas.
 */
export async function optimizeImageInBrowser(
  file: File,
  options: OptimizationOptions = {}
): Promise<OptimizationResult> {
  const startTime = performance.now();
  const {
    maxWidth = 2048,
    maxHeight = 2048,
    quality = 0.82,
    targetFormat = "image/webp",
  } = options;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read image file"));

    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error("Failed to decode image"));

      img.onload = () => {
        const origWidth = img.naturalWidth || img.width;
        const origHeight = img.naturalHeight || img.height;

        // Calculate proportional scale down (no upscaling)
        let targetWidth = origWidth;
        let targetHeight = origHeight;

        if (targetWidth > maxWidth || targetHeight > maxHeight) {
          const ratio = Math.min(maxWidth / targetWidth, maxHeight / targetHeight);
          targetWidth = Math.round(targetWidth * ratio);
          targetHeight = Math.round(targetHeight * ratio);
        }

        // Draw to offscreen canvas
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          reject(new Error("Failed to get canvas 2d context"));
          return;
        }

        // High quality bicubic interpolation
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        // Convert to WebP blob
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Canvas toBlob failed"));
              return;
            }

            // Create a descriptive file name with .webp extension
            const baseName = file.name.replace(/\.[^/.]+$/, "");
            const newFilename = `${baseName}.webp`;
            const optimizedFile = new File([blob], newFilename, {
              type: targetFormat,
              lastModified: Date.now(),
            });

            const originalSize = file.size;
            const optimizedSize = optimizedFile.size;
            const savings = Math.max(
              0,
              Math.round(((originalSize - optimizedSize) / originalSize) * 100)
            );

            const endTime = performance.now();

            resolve({
              file: optimizedFile,
              previewUrl: URL.createObjectURL(blob),
              originalSize,
              optimizedSize,
              reductionPercentage: savings,
              originalDimensions: { width: origWidth, height: origHeight },
              optimizedDimensions: { width: targetWidth, height: targetHeight },
              processingTimeMs: Math.round(endTime - startTime),
            });
          },
          targetFormat,
          quality
        );
      };

      img.src = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Format bytes into human-readable string (e.g. 1.4 MB, 240 KB)
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
