import { useSyncExternalStore } from 'react';

// Store for scroll position
const generateScrollStore = () => {
  let scrollY = 0;

  const getSnapshot = () => {
    return scrollY;
  };

  const subscribe = (callback: () => void) => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      callback();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  return { getSnapshot, subscribe };
};

const { getSnapshot, subscribe } = generateScrollStore();

// Hook to get current scroll position
export default function useScrollPosition() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
