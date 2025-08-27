import { Navbar, Transition, Contact as ContactSection } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
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
