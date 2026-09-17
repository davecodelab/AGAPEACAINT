type GeoMarkProps = {
  className?: string;
  stroke?: string;
  opacity?: number;
};

/**
 * A restrained geometric device echoing the AAI logo's nested pattern.
 * Used sparingly as a watermark on dark sections, dividers and the footer —
 * never as a repeating background texture.
 */
export default function GeoMark({
  className = "",
  stroke = "#FFFFFF",
  opacity = 0.08,
}: GeoMarkProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className={className}
      style={{ opacity }}
    >
      <g fill="none" stroke={stroke} strokeWidth="1.25">
        {Array.from({ length: 5 }).map((_, i) => (
          <rect
            key={i}
            x={40 + i * 26}
            y={40 + i * 26}
            width={320 - i * 52}
            height={320 - i * 52}
            transform="rotate(45 200 200)"
          />
        ))}
      </g>
    </svg>
  );
}
