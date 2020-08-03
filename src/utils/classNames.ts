export type ClassNamesArg = string | {[key: string]: boolean};
export function classNames(...args: ClassNamesArg[]): string {
  return args
    .reduce((acc, cur) => {
      if (typeof cur === 'string') {
        acc.push(cur);
      } else if (typeof cur === 'object') {
        for (let key in cur) {
          if (cur.hasOwnProperty(key) && cur[key]) {
            acc.push(key);
          }
        }
      }
      return acc;
    }, [] as string[])
    .join(' ');
}
