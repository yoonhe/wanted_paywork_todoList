export const jsonStringify: ({ value }: { value: any }) => string = ({
  value,
}) => {
  const result = JSON.stringify(value);

  return result;
};

export const jsonParse: ({ value }: { value: any }) => any = ({ value }) => {
  const result = JSON.parse(value);

  return result;
};
