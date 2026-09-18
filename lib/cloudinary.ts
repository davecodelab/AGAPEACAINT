export interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
}

/**
 * Generate a consistent, predictable, and unique public_id for Cloudinary.
 * Format: agape-academy/{section}/{cleanSlot}_{YYYYMMDD}_{shortHash}
 */
export function generateCloudinaryPublicId(
  section: string,
  slotId: string
): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const dateStr = `${year}${month}${day}`;

  const cleanSection = section.toLowerCase().replace(/[^a-z0-9_-]/g, "_");
  const cleanSlot = slotId.toLowerCase().replace(/[^a-z0-9_-]/g, "_");
  const shortHash = Math.random().toString(36).substring(2, 6);

  return `agape-academy/${cleanSection}/${cleanSlot}_${dateStr}_${shortHash}`;
}

/**
 * Upload an image file directly from the browser to Cloudinary using an Upload Preset.
 */
export async function uploadToCloudinary(
  file: File,
  options: {
    section?: string;
    slotId?: string;
    publicId?: string;
    tags?: string[];
  } = {}
): Promise<CloudinaryUploadResponse> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary is not configured. Please set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET in .env.local"
    );
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const publicId =
    options.publicId ||
    (options.section && options.slotId
      ? generateCloudinaryPublicId(options.section, options.slotId)
      : undefined);

  if (publicId) {
    formData.append("public_id", publicId);
  }

  const allTags = ["aai-web", ...(options.tags || [])];
  if (options.section) allTags.push(`section:${options.section}`);
  if (options.slotId) allTags.push(`slot:${options.slotId}`);
  formData.append("tags", allTags.join(","));

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message =
      errorData?.error?.message ||
      `Cloudinary upload failed with HTTP status ${response.status}`;
    throw new Error(message);
  }

  const data = (await response.json()) as CloudinaryUploadResponse;
  return data;
}

/**
 * Check whether a URL is hosted on Cloudinary
 */
export function isCloudinaryUrl(url?: string): boolean {
  return Boolean(url && url.includes("res.cloudinary.com"));
}

/**
 * Injects automatic format & quality transformations into Cloudinary URLs.
 * Automatically serves AVIF/WebP based on visitor browser and tunes compression.
 */
export function getOptimizedCloudinaryUrl(
  url: string,
  options: { width?: number; height?: number; crop?: string } = {}
): string {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }

  if (url.includes("/f_auto,q_auto")) {
    return url;
  }

  const transformations = ["f_auto", "q_auto"];
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.crop) transformations.push(`c_${options.crop}`);

  const transformString = transformations.join(",");
  return url.replace("/upload/", `/upload/${transformString}/`);
}

