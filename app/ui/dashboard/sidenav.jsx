import Link from 'next/link';
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-50 border-r">
      <Link 
        href="/dashboard"
        className="mb-8 flex h-16 items-center justify-start rounded-md bg-blue-600 p-4 hover:bg-blue-500 transition-colors"
      >
        <div className="w-32 text-white md:w-40">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
      </Link>
      <div className="flex grow flex-col space-y-2">
        <NavLinks />
      </div>
    </div>
  );
} 