import type { LocalStorageType } from '../types/local-storage';

const DEFAULT_STR_VALUE = JSON.stringify({
  engravings: {}
});

export function useLocalStorage() {
  const data = JSON.parse(
    window.localStorage.getItem('data') ?? DEFAULT_STR_VALUE
  ) as LocalStorageType;

  return {
    data
  };
}
