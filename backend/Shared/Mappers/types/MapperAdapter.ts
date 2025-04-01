export type MapperAdapter<TSource, TDestination> = {
  [k in keyof Partial<TDestination>]?: (source: TSource) => TDestination[k];
}