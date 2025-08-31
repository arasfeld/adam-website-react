import { useEffect, useMemo, useState } from 'react';

interface AudioWaveformProps {
  isPlaying?: boolean;
  color?: string; // Optional color override
}

export function AudioWaveform({
  isPlaying = false,
  color,
}: AudioWaveformProps) {
  const [bars, setBars] = useState([8, 12, 16, 20, 14, 18]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setBars((prevBars) =>
        prevBars.map(() => {
          // Generate random heights between 4 and 24 pixels
          return 4 + Math.random() * 20;
        })
      );
    }, 300); // Slower updates (300ms instead of 150ms)

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Use uniform short bars when paused
  const displayBars = isPlaying ? bars : Array(6).fill(6);

  // Determine the color class based on props
  const colorClass = useMemo(() => {
    if (color) {
      return color; // Use the provided color override
    }
    return isPlaying ? 'bg-primary' : 'bg-muted-foreground';
  }, [color, isPlaying]);

  return (
    <div className="flex items-center gap-0.5 h-6">
      {displayBars.map((height, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-600 ease-out ${colorClass}`}
          style={{
            height: `${height}px`,
            transform: `scaleY(${isPlaying ? 1 : 0.3})`,
            opacity: isPlaying ? 1 : 0.4,
          }}
        />
      ))}
    </div>
  );
}
