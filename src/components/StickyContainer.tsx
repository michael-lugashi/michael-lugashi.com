import React, { useRef } from 'react';
import useSticky from '../hooks/useSticky';

interface StickyContainerProps {
  children: React.ReactNode;
  triggerRef: React.RefObject<HTMLElement | null>;
  startOffset?: number;
  endOffset?: number;
  enabled?: boolean;
  behavior?: 'fade' | 'scroll';
  className?: string;
}

const StickyContainer: React.FC<StickyContainerProps> = ({
  children,
  triggerRef,
  startOffset = 0,
  endOffset = 1,
  enabled = true,
  behavior = 'scroll',
  className = '',
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useSticky({
    triggerRef,
    targetRef,
    startOffset,
    endOffset,
    enabled,
    behavior,
  });

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  );
};

export default StickyContainer;
