declare module 'str-utils' {
  // export const ...
  // export function ...
  type StringDecoratorType = (value: string) => string;
  export const strReverse: StringDecoratorType;
  export const strToLower: StringDecoratorType;
  export const strToUpper: StringDecoratorType;
  export const strRandomize: StringDecoratorType;
  export const strInvertCase: StringDecoratorType;
}
