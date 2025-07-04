declare module 'stats' {
  // Añade las declaraciones de las funciones restantes aquí.
  type Comparator<T> = (a: T, b: T) => number;
  export function getMaxIndex<T>(items: T[], comparator: Comparator<T>): number;
  export function getMaxElement<T>(
    items: T[],
    comparator: Comparator<T>
  ): T | null;
  export function getMinIndex<T>(items: T[], comparator: Comparator<T>): number;
  export function getMinElement<T>(
    items: T[],
    comparator: Comparator<T>
  ): T | null;
  export function getMedianIndex<T>(
    items: T[],
    comparator: Comparator<T>
  ): number;
  export function getMedianElement<T>(
    items: T[],
    comparator: Comparator<T>
  ): T | null;
  export function getAverageValue<T>(
    items: T[],
    extractor: (item: T) => number
  ): number | null;
}
