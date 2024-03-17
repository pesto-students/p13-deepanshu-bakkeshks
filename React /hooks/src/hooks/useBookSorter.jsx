import { useMemo } from 'react';

export const useBookSorter = (books) => {
  return useMemo(() => {
    return books.slice().sort((a, b) => a.title.localeCompare(b.title));
  }, [books]);
};
