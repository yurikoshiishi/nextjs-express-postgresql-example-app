import {useRouter} from 'next/router';
import {useState} from 'react';

export default function useSearch() {
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
        q: encodeURIComponent(value),
      },
    });
  };

  return {value, handleChange, handleSubmit};
}
