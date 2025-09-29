import { useEffect } from 'react';
import useScrollPosition from './useScrollPosition';

interface UseParallaxScrollOptions {
  speed?: number; // multiplier for scroll speed (1.2 = 1.2x faster)
  direction?: 'up' | 'down'; // direction of parallax movement
  enabled?: boolean; // enable/disable the effect
  elementRef: React.RefObject<HTMLElement | null>; // pass ref as prop
}

export const useParallaxScroll = (options: UseParallaxScrollOptions) => {
  const { speed = 1.2, direction = 'up', enabled = true, elementRef } = options;

  const scrollY = useScrollPosition();

  useEffect(() => {
    if (!enabled || !elementRef.current) return;

    // Calculate parallax offset
    const parallaxOffset = scrollY * (speed - 1);
    const directionMultiplier = direction === 'up' ? -1 : 1;
    const finalOffset = parallaxOffset * directionMultiplier;

    // Apply transform with performance optimization
    elementRef.current.style.transform = `translateY(${String(finalOffset)}px)`;
    elementRef.current.style.willChange = 'transform';
  }, [scrollY, speed, direction, enabled, elementRef]);
};

export default useParallaxScroll;
