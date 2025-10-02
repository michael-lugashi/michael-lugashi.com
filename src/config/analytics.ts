// Google Analytics Configuration
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;

// Google Analytics gtag function types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        [key: string]: unknown;
        page_title?: string;
        page_location?: string;
        custom_map?: Record<string, string>;
      }
    ) => void;
    dataLayer: unknown[];
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string = GA_MEASUREMENT_ID) => {
  // Create dataLayer if it doesn't exist

  // Define gtag function using rest parameters
  window.gtag = function (...args) {
    window.dataLayer.push(...args);
  };

  // Initialize with current date
  window.gtag('js', new Date());

  // Configure GA with the measurement ID
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: title ?? document.title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: {
    [key: string]: unknown;
    event_category?: string;
    event_label?: string;
    value?: number;
  }
) => {
  window.gtag('event', eventName, parameters);
};

// Predefined event tracking functions for common actions
export const trackContactFormSubmit = (method: 'email' | 'form' = 'form') => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: method,
    value: 1,
  });
};

export const trackProjectClick = (projectName: string, projectUrl?: string) => {
  trackEvent('project_click', {
    event_category: 'engagement',
    event_label: projectName,
    project_url: projectUrl,
    value: 1,
  });
};

export const trackSocialClick = (platform: string, url: string) => {
  trackEvent('social_click', {
    event_category: 'engagement',
    event_label: platform,
    social_url: url,
    value: 1,
  });
};

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    file_type: fileType,
    value: 1,
  });
};

export const trackThemeToggle = (theme: 'light' | 'dark') => {
  trackEvent('theme_toggle', {
    event_category: 'user_preference',
    event_label: theme,
    value: 1,
  });
};

export const trackScrollToSection = (sectionName: string) => {
  trackEvent('scroll_to_section', {
    event_category: 'navigation',
    event_label: sectionName,
    value: 1,
  });
};
