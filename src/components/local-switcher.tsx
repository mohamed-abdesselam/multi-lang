'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const currentPath = window.location.pathname;
      let urlWithoutLocale = '';
      if (currentPath === '/en' || currentPath === '/ar' || currentPath === '/fr') {
        urlWithoutLocale = '/';
      } else {
        urlWithoutLocale = currentPath.replace(/^\/[a-z]{2}\//, '/'); // Remove locale prefix
      }
      
      router.replace(`/${nextLocale}/${urlWithoutLocale}`);
    });
  };

  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>Change language</p>
      <select
        defaultValue={localeActive}
        className='bg-transparent py-2 px-3'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>English</option>
        <option value='fr'>French</option>
        <option value='ar'>العربية</option>
      </select>
    </label>
  );
}
