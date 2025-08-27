import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { Offcanvas } from '@/layout';
import { Providers } from '@/providers';
import './globals.css';
// Added Less stylesheet for scoped variables and reduced-motion utilities
import './globals.less';

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <Providers>
          <Offcanvas />
          {children}
        </Providers>
      </body>
    </html>
  );
}
