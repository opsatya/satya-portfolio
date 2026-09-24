import { Transition, Navbar, Thumbnail, Project } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Full Stack Developer building production SaaS with React, TypeScript, Node.js, Fastify, PostgreSQL, Redis and AWS. Based in Pune, India.',
};

export default function Work() {
  return (
    <Transition>
      <Navbar />
      <main>
        <Thumbnail />
        <Project />
      </main>
    </Transition>
  );
}
