export type WithRequired<T, K extends keyof T> =
  Required<Pick<T, K>> & Partial<Omit<T, K>>;

export type WithOptional<T, K extends keyof T> =
  Partial<Pick<T, K>> & Required<Omit<T, K>>;