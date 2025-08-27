'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const [imageError, setImageError] = useState(false);
  const image =
    type === 'image' ? (
      !imageError ? (
        <Image
          src={source}
          className='object-cover'
          fill={true}
          alt='project image'
          onError={() => setImageError(true)}
        />
      ) : (
        <div className='flex h-full w-full items-center justify-center bg-muted text-muted-foreground'>
          Image unavailable
        </div>
      )
    ) : null;
  const video = null; // Local video handling can be added later if needed

  return (
    <Center
      className='relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
