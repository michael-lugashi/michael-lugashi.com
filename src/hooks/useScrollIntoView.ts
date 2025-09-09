import { useRef, useCallback } from 'react';

const useScrollIntoView = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScrollToContactMe = useCallback(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return [ref, handleScrollToContactMe] as const;
};

export default useScrollIntoView;
