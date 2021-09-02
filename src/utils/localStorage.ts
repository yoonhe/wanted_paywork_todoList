import { jsonParse, jsonStringify } from './json';

export const setLocalStorage: ({
  key,
  value,
}: {
  key: string;
  value: any;
}) => void = ({ key, value }) => {
  const data = jsonStringify({ value });

  localStorage.setItem(key, data);
};

export const getLocalStorage: ({ key }: { key: string }) => any = ({ key }) => {
  const localStorageData = getLocalStorage({ key });

  const data = jsonParse({ value: localStorageData });

  return data;
};
