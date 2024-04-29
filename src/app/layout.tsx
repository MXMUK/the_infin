import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/index.scss';

const NeueHaasGroteskDisplayPro = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplayLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayRoman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayMedium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'The Infin',
  description: 'The Infin layout page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NeueHaasGroteskDisplayPro.className}>
        {children}
      </body>
    </html>
  );
}
