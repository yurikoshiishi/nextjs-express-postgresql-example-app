import {useRouter} from 'next/router';
import {useState} from 'react';

export default function useSearch(cb?: () => void) {
  const [value, setValue] = useState<string>('');
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router
      .push({
        pathname: '/search',
        query: {
          q: encodeURIComponent(value.trim()),
        },
      })
      .then(() => {
        if (typeof window === 'undefined') {
          return;
        }
        window.scrollTo(0, 0);
      })
      .catch((err) => alert('エラーが発生しました。再度お試しください。'));
    if (cb) {
      cb();
    }
  };

  return {value, handleChange, handleSubmit};
}
