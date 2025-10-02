import React, { useRef } from 'react';
import useParallaxScroll from '../hooks/useParallaxScroll';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  enabled?: boolean;
  className?: string;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 1.2,
  direction = 'up',
  enabled = true,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useParallaxScroll({
    elementRef,
    speed,
    direction,
    enabled,
  });

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxContainer;
