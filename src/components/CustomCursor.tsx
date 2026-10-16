import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer');
      setIsPointer(!!interactive);

      const customLabel = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      setCursorText(customLabel || '');
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            cursorText
              ? 'w-20 h-20 bg-[#111111] text-white font-medium text-xs shadow-xl'
              : isPointer
              ? 'w-10 h-10 bg-black/[0.08] border border-black/30 backdrop-blur-xs scale-110'
              : 'w-6 h-6 border border-black/25'
          }`}
        >
          {cursorText && <span className="uppercase tracking-wider text-[11px]">{cursorText}</span>}
        </div>
      </div>

      {/* Tiny Center Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[10000] will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full transition-all duration-150 ${
            cursorText ? 'opacity-0' : isPointer ? 'bg-[#111111] scale-125' : 'bg-[#111111]'
          }`}
        />
      </div>
    </>
  );
};
