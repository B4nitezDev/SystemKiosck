export interface IUserMapper {
  map<TSource, TDestination>(source: TSource): TDestination;
}

export interface IMapper<TSource, TDestination> {
  map(source: TSource): TDestination;
  mapArray(sources: TSource[]): TDestination[];
}
