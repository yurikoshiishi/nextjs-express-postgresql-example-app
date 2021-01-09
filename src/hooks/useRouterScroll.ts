import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function useRouterScroll() {
  const router = useRouter();
  useEffect(() => {
    const handler = (url, obj) => {
      if (typeof window === 'undefined') {
        return;
      }
      window.scrollTo(0, 0);
    };
    router.events.on('routeChangeComplete', handler);
    return () => {
      router.events.off('routerChangeComplete', handler);
    };
  });
}
