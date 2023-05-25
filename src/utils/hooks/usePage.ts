import { useState } from 'react';
// import { action } from '@storybook/addon-actions';

type usePageProps = [number, Function];

export function usePage(inputPage: number): usePageProps {
  const [page, setPage] = useState(inputPage);

  const handleClickPage = (p: number) => {
    setPage(p);
  };

  return [page, handleClickPage];
}
