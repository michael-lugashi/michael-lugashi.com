import { useEffect } from 'react';
import useScrollPosition from './useScrollPosition';

interface UseStickyOptions {
  triggerRef: React.RefObject<HTMLElement | null> | null; // element that defines the sticky area
  targetRef: React.RefObject<HTMLElement | null> | null; // element to make sticky
  startOffset?: number; // start sticky after this much of trigger element (0-1)
  endOffset?: number; // end sticky after this much of trigger element (0-1)
  enabled?: boolean; // enable/disable the effect
  behavior?: 'fade' | 'scroll'; // 'fade' = fade out, 'scroll' = resume normal scrolling
}

export const useSticky = (options: UseStickyOptions) => {
  const { triggerRef, targetRef, startOffset = 0, endOffset = 1, enabled = true, behavior = 'scroll' } = options;

  const scrollY = useScrollPosition();

  useEffect(() => {
    if (!enabled || !triggerRef || !targetRef || !triggerRef.current || !targetRef.current) return;

    const triggerElement = triggerRef.current;
    const targetElement = targetRef.current;

    const triggerTop = triggerElement.offsetTop;
    const triggerHeight = triggerElement.offsetHeight;

    // Calculate start and end points
    const startPoint = triggerTop + triggerHeight * startOffset;
    const endPoint = triggerTop + triggerHeight * endOffset;

    if (behavior === 'fade') {
      // Original fade behavior
      const shouldShow = scrollY >= startPoint && scrollY <= endPoint;
      targetElement.style.opacity = shouldShow ? '1' : '0';
      targetElement.style.pointerEvents = shouldShow ? 'auto' : 'none';
      targetElement.style.transition = 'opacity 0.3s ease-in-out';
      targetElement.style.position = 'fixed';
      targetElement.style.transform = 'none';
    } else {
      // Scroll behavior: sticky during trigger area, then scroll normally
      targetElement.style.opacity = '1';
      targetElement.style.pointerEvents = 'auto';
      targetElement.style.transition = 'none';

      if (scrollY >= startPoint && scrollY <= endPoint) {
        // Sticky phase: stay fixed in place
        targetElement.style.position = 'fixed';
        targetElement.style.transform = 'none';
      } else if (scrollY > endPoint) {
        // Scroll phase: move up with page scroll (negative direction)
        const scrollOffset = scrollY - endPoint;
        targetElement.style.position = 'fixed';
        targetElement.style.transform = `translateY(-${String(scrollOffset)}px)`;
      } else {
        // Before sticky starts
        targetElement.style.position = 'fixed';
        targetElement.style.transform = 'none';
      }
    }
  }, [scrollY, triggerRef, targetRef, startOffset, endOffset, enabled, behavior]);
};

export default useSticky;
