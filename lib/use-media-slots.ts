"use client";

import { useEffect, useState } from "react";
import { DEFAULT_SLOTS, MediaSlot } from "./media-slots";
import { getOptimizedCloudinaryUrl } from "./cloudinary";

// In-memory module cache and in-flight promise to eliminate duplicate API requests
let cachedSlots: Record<string, MediaSlot> | null = null;
let inFlightFetch: Promise<Record<string, MediaSlot>> | null = null;

async function fetchAllSlots(): Promise<Record<string, MediaSlot>> {
  if (cachedSlots) return cachedSlots;
  if (inFlightFetch) return inFlightFetch;

  inFlightFetch = (async () => {
    try {
      const res = await fetch("/api/admin/slots");
      const data = await res.json();
      const map: Record<string, MediaSlot> = { ...DEFAULT_SLOTS };

      if (data.success && Array.isArray(data.slots)) {
        data.slots.forEach((s: MediaSlot) => {
          if (s && s.id) {
            map[s.id] = {
              ...s,
              currentUrl: getOptimizedCloudinaryUrl(s.currentUrl),
            };
          }
        });
      }
      cachedSlots = map;
      return map;
    } catch {
      return { ...DEFAULT_SLOTS };
    } finally {
      inFlightFetch = null;
    }
  })();

  return inFlightFetch;
}

/**
 * Invalidate cache when an admin updates a slot
 */
export function invalidateSlotsCache() {
  cachedSlots = null;
}

/**
 * Hook to retrieve an image slot with automatic live sync and request deduplication.
 * Gracefully falls back to default local image assets.
 */
export function useMediaSlot(slotId: string): MediaSlot {
  const defaultSlot = DEFAULT_SLOTS[slotId] || {
    id: slotId,
    section: "homepage",
    label: slotId,
    description: "",
    aspectRatio: "16:9",
    recommendedDimensions: "1920x1080",
    currentUrl: "",
    altText: "",
  };

  const [slot, setSlot] = useState<MediaSlot>(
    cachedSlots?.[slotId] || defaultSlot
  );

  useEffect(() => {
    let isMounted = true;

    fetchAllSlots().then((slotsMap) => {
      if (isMounted && slotsMap[slotId]) {
        setSlot(slotsMap[slotId]);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slotId]);

  return slot;
}
