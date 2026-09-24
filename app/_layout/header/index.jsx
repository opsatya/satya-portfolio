'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Link from 'next/link';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* Removed personal photo as per requirement: use project visuals only */}
      {/* Subtle background color kept for contrast; hero text carries branding */}

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Satyajeet Singh
                <span className='spacer ms-[0.3em]'>-</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Full Stack Developer</span>
              <span className='block'>PERN • APIs • Cloud</span>
            </h4>
            {/* Quick access links for recruiters (GitHub, LinkedIn, Email) */}
            <div className='mt-4 flex flex-wrap gap-3'>
              <Link href='https://github.com/opsatya' target='_blank' rel='noopener noreferrer'>github.com/opsatya</Link>
              <Link href='https://www.linkedin.com/in/satyjeet-singh' target='_blank' rel='noopener noreferrer'>LinkedIn</Link>
              <Link href='mailto:satyajeet.singh12005@gmail.com'>Email</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
