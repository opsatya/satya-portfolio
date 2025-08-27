import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
// Updated page metadata to reflect Satyajeet Singh and full‑stack focus
export const metadata = {
  title: 'Home | Satyajeet Singh',
  description:
    'Full Stack developer (MERN). Building scalable web apps, REST APIs, and secure auth. Cloud, Docker, and performance-focused UI.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
