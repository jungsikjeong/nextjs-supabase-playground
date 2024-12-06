import CONFIG from '@/config';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: any;
      }
    ) => void;
  }
}

export const GA_TRACKING_ID = CONFIG.googleAnalytics.config.measurementId;

export const pageview = (url: string) => {
  if (typeof window !== 'object') return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  if (typeof window !== 'object') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
