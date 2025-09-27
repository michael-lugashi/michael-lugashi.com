// Import all project images
import playdigoLogo from './playdigo-logo.png';
import computer from './computer.png';
import meDoodle from './me-doodle.png';

// Export image mapping object
export const projectImages = {
  'playdigo-logo': playdigoLogo,
  'computer': computer,
  'me-doodle': meDoodle,
} as const;

export type ImageKey = keyof typeof projectImages;

// Helper function to get image URL from key
export const getProjectImage = (imageKey: ImageKey): string => {
  return projectImages[imageKey];
};
