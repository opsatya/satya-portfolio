/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://opsatya-portfolio.vercel.app/'),
  title: {
    template: '%s | Satyajeet Singh',
    default: 'Satyajeet Singh • Full Stack Developer & Programmer',
  },
  description:
    "Full Stack Developer skilled in the MERN stack. Building scalable web applications, REST APIs, secure authentication systems, and algorithmic trading platforms. Passionate about open source, cloud deployments, and modern web technology. Based in India.",
  generator: 'Satyajeet Singh',
  applicationName: 'Satyajeet Singh Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Full Stack Developer',
    'MERN',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'AWS',
    'Docker',
    'Linux',
    'Algorithmic Trading',
    'Open Source',
    'Web Development',
    'Portfolio',
    'India',
  ],
  authors: [
    { name: 'Satyajeet Singh', url: 'https://github.com/opsatya' },
  ],
  creator: 'Satyajeet Singh',
  publisher: 'Satyajeet Singh',
  twitter: {
    card: 'summary_large_image',
    title: 'Satyajeet Singh Portfolio',
    description:
      "Explore Satyajeet Singh's portfolio: MERN stack expert, React/Node developer, algorithmic trading enthusiast, and cloud technology practitioner.",
    siteId: '1467726470533754880',
    creator: '@opsatya',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://opsatya-portfolio.vercel.app/screenshot.png',
      alt: 'Satyajeet Singh Portfolio Screenshot',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
