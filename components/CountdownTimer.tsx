'use client';

import { useEffect, useState } from 'react';

function getTimeLeft(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: diff <= 0,
  };
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(targetDate));
    const interval = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: time?.days },
    { label: 'Hours', value: time?.hours },
    { label: 'Minutes', value: time?.minutes },
    { label: 'Seconds', value: time?.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5" role="timer" aria-live="polite">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center rounded-card bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 min-w-[68px] sm:min-w-[88px] animate-pulse-soft"
        >
          <span className="font-display text-3xl sm:text-5xl font-extrabold text-amber tabular-nums">
            {unit.value !== undefined ? String(unit.value).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-white/60">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
