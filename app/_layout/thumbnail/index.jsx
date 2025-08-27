'use client';

import { useEffect, useRef } from 'react';

import { useFollowPointer } from '@/hooks';

import {
  ThumbnailAction,
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailLabel,
  ThumbnailList,
  ThumbnailModal,
} from './components';
import { scaleUp } from './variants';

export function Thumbnail() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const modal = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const cursor = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const label = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const sectionRef = useRef(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
    cursor,
    label,
  });

  // Hide modal/cursor when the section is out of view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      entries => {
        const isIntersecting = entries[0]?.isIntersecting ?? false;
        if (!isIntersecting) {
          // simulate leave so UI hides when scrolled away
          handlePointerLeave(index);
        }
      },
      { root: null, threshold: 0.1 },
    );
    observer.observe(section);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, handlePointerLeave]);

  return (
    <section
      ref={sectionRef}
      className='container relative'
      onPointerLeave={() => handlePointerLeave(index)}
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <div className='my-8 flex flex-col gap-10'>
        <ThumbnailLabel>Recent work</ThumbnailLabel>
        <ThumbnailList
          handlePointerEnter={handlePointerEnter}
          handlePointerLeave={handlePointerLeave}
          moveItems={moveItems}
        />
        <ThumbnailModal
          ref={modal}
          variants={scaleUp}
          active={active}
          index={index}
        />
        <ThumbnailCursorCircle
          ref={cursor}
          variants={scaleUp}
          active={active}
        />
        <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>
          View
        </ThumbnailCursorLabel>
        <ThumbnailAction>
          More work<sup className='text-muted-foreground'>14</sup>
        </ThumbnailAction>
      </div>
    </section>
  );
}
