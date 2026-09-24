import { Description, Experience, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Full Stack Developer building production SaaS with React, TypeScript, Node.js, Fastify, PostgreSQL, Redis and AWS. Based in Pune, India.',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main style={{ minHeight: '900px' }}>
        <Description />
        <Experience />
      </main>
    </Transition>
  );
}
