import Container from '@/components/container';
import HomeGradiant from '@/components/home-gradiant';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div >
      <HomeGradiant />
    </div>
  );
}
