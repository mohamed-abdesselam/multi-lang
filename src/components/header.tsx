import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { ThemeModeToggle } from './theme-mode-toggle';
import { ThemeColorToggle } from './theme-color-toggle';
import LocaleToggle from './local-toggle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import Container from './container';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('Navigation');

  return (
    <header className="sticky top-0 z-50 py-4 bg-muted/60 backdrop-blur-xl border-b border-border">
      <Container>
        <nav className="flex flex-row items-center justify-between max-lg:flex-row-reverse">
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/" className="text-lg font-semibold">{t('home')}</Link>
            <Link href={`/${locale}/about`} className="text-lg">{t('about')}</Link>
            <Link href={`/${locale}/color`} className="text-lg">{t('color')}</Link>
          </div>
          <div className="flex items-center gap-4 max-lg:gap-1">
            <ThemeColorToggle />
            <LocaleToggle />
            <ThemeModeToggle />
          </div>
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center text-foreground hover:text-primary"
                >
                  <span className="sr-only">Open menu</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 ml-4 w-48 bg-background border border-border rounded-md shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="/" className="block px-4 py-2 text-foreground hover:bg-accent">{t('home')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/about`} className="block px-4 py-2 text-foreground hover:bg-accent">{t('about')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/color`} className="block px-4 py-2 text-foreground hover:bg-accent">{t('color')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>

            </DropdownMenu>
          </div>
        </nav>
      </Container>
    </header>
  );
}
