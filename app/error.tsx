"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center bg-[#F8F7F3] text-[#323131] gap-4'>
      <h2 className='text-2xl font-medium'>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className='px-6 py-3 border border-[#323131] rounded-full text-sm hover:bg-[#323131] hover:text-[#F8F7F3] transition'
      >
        Try again
      </button>
    </div>
  );
}
