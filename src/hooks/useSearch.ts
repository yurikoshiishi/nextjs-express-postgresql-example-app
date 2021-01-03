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
    router.push({
      pathname: '/search',
      query: {
        q: encodeURIComponent(value.trim()),
      },
    });
    if (cb) {
      cb();
    }
  };

  return {value, handleChange, handleSubmit};
}
