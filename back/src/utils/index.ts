export const cleanNullProps = (obj: any) => JSON.parse(JSON.stringify(obj));

export const checkAllProps = (obj1: any, obj2: any) => {
  return Object.keys(obj1).reduce((acc, item) => {
    if (!acc) return acc;
    return obj1[item] === obj2[item];
  }, true);
}