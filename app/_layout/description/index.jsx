'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

// Updated short summary to reflect Satyajeet's profile and job-seeking focus
const phrase =
  'Full Stack Developer (MERN). I build scalable web apps, REST APIs, and secure auth with a focus on performance and clean, maintainable code.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='basis-7/12 lg:basis-3/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              Comfortable with cloud deployments, Docker, and Git workflows. Quick to learn, focused on solving real problems, and ready to contribute.
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className='absolute right-0 top-3/4 lg:top-full lg:me-10'>
            {/* Clear CTAs to projects and contact for recruiters */}
            <div className='flex gap-3'>
              <Link href='/work' passHref>
                <MagneticButton variant='ghost' size='xl'>
                  View projects
                </MagneticButton>
              </Link>
              <Link href='/contact' passHref>
                <MagneticButton variant='ghost' size='xl'>
                  Contact
                </MagneticButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
