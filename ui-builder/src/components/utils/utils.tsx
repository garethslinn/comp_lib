export const keygen = () => {
  return Math.random()
    .toString(20)
    .substring(4);
};
