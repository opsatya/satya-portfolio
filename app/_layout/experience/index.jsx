'use client';

import { ParallaxFade } from '@/components';
import { experience, milestones, skills } from '@/data';

/** @param {import('react').PropsWithChildren<unknown>} */
function SectionLabel({ children }) {
  return (
    <div
      className='mb-10'
      style={{
        paddingInlineStart: 'clamp(2.5em, 8vw, 8em)',
      }}
    >
      <h5 className='text-xs uppercase text-secondary-foreground'>
        {children}
      </h5>
    </div>
  );
}

export function Experience() {
  const jobs = experience.map(
    ({
      company,
      companySuffix,
      role,
      period,
      location,
      summary,
      highlights,
      stack,
    }) => (
      <li
        key={company}
        className='border-t border-solid last-of-type:border-b'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1.5em,3vw,3.5em)',
        }}
      >
        <ParallaxFade>
          <div className='flex justify-between gap-6 max-md:flex-col'>
            <h4
              className='leading-tight'
              style={{ fontSize: 'clamp(2em, 3.5vw, 3.75em)' }}
            >
              <span className='-ms-[0.11em] block'>{company}</span>
              <span className='block text-muted-foreground'>
                {companySuffix}
              </span>
            </h4>
            <div className='text-lg md:pt-2 md:text-right'>
              <p className='font-medium'>{role}</p>
              <p className='text-muted-foreground'>{period}</p>
              <p className='text-muted-foreground'>{location}</p>
            </div>
          </div>

          <div className='mt-10 grid gap-8 lg:grid-cols-12 lg:gap-0'>
            <p className='text-lg lg:col-span-5 lg:border-r lg:border-solid lg:pe-10'>
              {summary}
            </p>
            <ul className='flex list-disc flex-col gap-3 ps-5 text-base text-muted-foreground lg:col-span-7 lg:ps-14'>
              {highlights.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <ul className='mt-10 flex flex-wrap items-center gap-y-2 text-base text-muted-foreground'>
            {stack.map((tech, i) => (
              <li key={tech} className='flex items-center'>
                {i > 0 && (
                  <span aria-hidden='true' className='px-3 text-secondary'>
                    |
                  </span>
                )}
                {tech}
              </li>
            ))}
          </ul>
        </ParallaxFade>
      </li>
    ),
  );

  const skillItems = skills.map(({ title, items }) => (
    <li key={title} className='border-t border-solid pt-4'>
      <h5 className='text-xs uppercase text-secondary-foreground'>{title}</h5>
      <p className='mt-3 text-lg'>{items}</p>
    </li>
  ));

  const milestoneItems = milestones.map(({ title, heading, detail }) => (
    <li key={title} className='border-t border-solid pt-4'>
      <h5 className='text-xs uppercase text-secondary-foreground'>{title}</h5>
      <p className='mt-3 text-xl font-medium'>{heading}</p>
      <p className='mt-1 text-base text-muted-foreground'>{detail}</p>
    </li>
  ));

  return (
    <section id='experience' className='container relative mt-24 lg:mt-48'>
      <div className='my-8'>
        <SectionLabel>Experience</SectionLabel>
        <ul>{jobs}</ul>
      </div>

      <div className='my-24'>
        <SectionLabel>Skills</SectionLabel>
        <ParallaxFade>
          <ul
            className='grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'
            style={{ paddingInline: 'calc(clamp(1em,3vw,4em) * 2)' }}
          >
            {skillItems}
          </ul>
        </ParallaxFade>
      </div>

      <div className='my-24'>
        <SectionLabel>Education &amp; Achievements</SectionLabel>
        <ParallaxFade>
          <ul
            className='grid gap-x-10 gap-y-8 md:grid-cols-2'
            style={{ paddingInline: 'calc(clamp(1em,3vw,4em) * 2)' }}
          >
            {milestoneItems}
          </ul>
        </ParallaxFade>
      </div>
    </section>
  );
}
