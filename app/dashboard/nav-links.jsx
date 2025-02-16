'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
  const pathname = usePathname();
  
  const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Invoices', href: '/dashboard/invoices' },
    { name: 'Customers', href: '/dashboard/customers' },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-blue-100 text-blue-600': isActive,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
} 