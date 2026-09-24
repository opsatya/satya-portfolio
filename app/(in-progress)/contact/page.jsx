import { Navbar, Transition, Contact as ContactSection } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Full Stack Developer building production SaaS with React, TypeScript, Node.js, Fastify, PostgreSQL, Redis and AWS. Based in Pune, India.',
};

export default function Contact() {
  return (
    <Transition>
      <Navbar />
      <main>
        <ContactSection />
      </main>
    </Transition>
  );
}
