
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function Header() {
  
  return (
    <div className='bg-gray-600 text-neutral-100'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <Link href='/'>Home</Link>
      </div>
    </div>
  );
}
