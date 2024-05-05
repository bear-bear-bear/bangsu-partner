export default function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: obj[key],
    };
  }, {} as Pick<T, K>);
}
