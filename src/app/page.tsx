import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative h-full lg:h-[140vh]'>
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-3 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/banner.jpg'
              alt='Star Trek'
              fill={true}
              className='absolute left-0 top-0 z-0'
            />
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Star Trek
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quidem
            soluta sequi facilis maiores perspiciatis laudantium ad nostrum.
          </p>
        </div>

        <div className='flex space-x-3'>
          <button className='md:text-x1 flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            Play
          </button>
          <button className='md:text-x1 flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            More Info
          </button>
        </div>
      </main>
    </div>
  );
}
