'use client';

import { useEffect } from 'react';

export default function error({ error, reset }: any) {
  /* useEffect(() => {
    console.log('logging error:', error);
  }, [error]);*/

  return (
    <div className='text-red-500'>
      <h1 className='text-2xl font-bold'>Error Page</h1>
      <div className='border-shaded border border-red-500 p-4'>
        <p>Something went wrong</p>
      </div>
    </div>
  );
}
