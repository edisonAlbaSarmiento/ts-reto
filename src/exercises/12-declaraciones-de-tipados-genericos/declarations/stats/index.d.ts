declare module 'stats' {
  // Añade las declaraciones de las funciones restantes aquí.
  export function getMaxIndex<T>(
    items: T[],
    comparator: (a: T, b: T) => number
  ): number;

  export function getMaxElement<T>(
    items: T[],
    comparator: (a: T, b: T) => number
  ): T | null;

  export function getMinIndex<T>(
    items: T[],
    comparator: (a: T, b: T) => number
  ): number;

  export function getMinElement<T>(
    items: T[],
    comparator: (a: T, b: T) => number
  ): T | null;

  export function getMedianIndex<T>(
    items: T[],
    comparator: (a: T, b: T) => number
  ): number;

  export function getMedianElement<T>(
    items: T[],
    comparator: (a: T, b: T) => number
  ): T | null;

  export function getAverageValue<T>(
    items: T[],
    extractor: (item: T) => number
  ): number;
}
