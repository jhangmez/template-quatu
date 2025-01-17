'use client'

import { GithubJhan, LinkedinJhan, VercelHarkaysoft } from '@routes'
import localFont from 'next/font/local'
import Link from 'next/link'
import { Divider } from '@nextui-org/divider'

const myFont = localFont({
  src: '../../../../public/font/Poppins-SemiBold.ttf'
})

export default function FooterWithSocialMediaIcons() {
  return (
    <footer className='bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto py-6 px-[20px] '>
        <Divider className='my-6 lg:my-8 bg-light-surfaceVariant dark:bg-dark-surfaceVariant' />
        <div className='w-full relative md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link
              href='/'
              className='w-[230px] h-14 justify-start items-center gap-[5px] inline-flex'
            >
              <div>
                <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                  Tienda
                </span>
              </div>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-light-onSurface dark:text-dark-onSurface'>
                Social
              </h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <Link
                    href={GithubJhan}
                    className='hover:underline'
                    target='_blank'
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href={LinkedinJhan}
                    className='hover:underline'
                    target='_blank'
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-light-onSurface dark:text-dark-onSurface'>
                Proyectos
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link
                    href={VercelHarkaysoft}
                    className='hover:underline'
                    target='_blank'
                  >
                    <span
                      className={`${myFont.className} self-center text-1xl whitespace-nowrap pb-3`}
                    >
                      Harkay
                      <span
                        className={`${myFont.className} text-2xl text-[0.8em]`}
                      >
                        {' '}
                        S O F T
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Divider className='my-6 lg:my-8 bg-light-surfaceVariant dark:bg-dark-surfaceVariant' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{'  '}
            <Link
              href={VercelHarkaysoft}
              className='hover:underline'
              target='_blank'
            >
              <span
                className={`${myFont.className} self-center text-1xl whitespace-nowrap pb-3`}
              >
                Harkay
                <span className={`${myFont.className} text-2xl text-[0.8em]`}>
                  {' '}
                  S O F T
                </span>
              </span>
            </Link>
            . Todos los derechos reservados.
          </span>
          <div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
            <div className='text-light-onSurface dark:text-dark-onSurface hover:text-gray-900 dark:hover:text-white'>
              <Link href={GithubJhan} target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
                  />
                </svg>
              </Link>
            </div>
            <div className='text-light-onSurface dark:text-dark-onSurface hover:text-gray-900 dark:hover:text-white'>
              <Link href={LinkedinJhan} target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
