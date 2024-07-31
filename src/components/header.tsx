import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';

export default function Header() {
  const locale = useLocale();

  const t = useTranslations('Navigation');

  return (
    <header className='py-4'>
      <nav className='flex items-center justify-between'>
        <div className="flex items-center gap-4">
          <Link href='/'>{t('home')}</Link>
          <Link href={`/${locale}/about`}>{t('about')}</Link>
        </div>
        <LocalSwitcher />
      </nav>
    </header>
  );
}
