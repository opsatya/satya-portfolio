import Link from 'next/link';
import { Transition, Navbar, Thumbnail, Project } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
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
