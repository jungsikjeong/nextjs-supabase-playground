import CONFIG from '@/config';
import { getSEOTags } from '@/lib/seo';
import '../globals.css';
import { spoqa } from '../nextFont';

export const metadata = getSEOTags({
  title: `Error to ${CONFIG.appName}`,
});

export default async function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
