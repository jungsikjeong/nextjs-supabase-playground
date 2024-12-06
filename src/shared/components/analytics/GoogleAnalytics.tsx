import CONFIG from '@/config';
import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      {CONFIG?.googleAnalytics?.enable === true && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.config.measurementId}`}
          />
          <Script strategy='lazyOnload' id='ga'>
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${CONFIG.googleAnalytics.config.measurementId}', {
                page_path: window.location.pathname,
              });`}
          </Script>
        </>
      )}
    </>
  );
}
