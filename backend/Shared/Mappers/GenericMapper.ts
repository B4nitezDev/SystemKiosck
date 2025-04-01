import { MapperAdapter } from "./types/MapperAdapter";
import { IMapper } from "./Interfaces/IUserMapper";

export class GenericMapper<TSource, TDestination> implements IMapper<TSource, TDestination> {
  constructor(
    private adapters: MapperAdapter<TSource, TDestination> = {}
  ) {
  }

  map(source: TSource): TDestination {
    const destination: any = {} as TDestination;

    for (const key in source) {
      if (!(key in this.adapters)) {
        destination[key] = (source as any)[key];
      }
    }

    for (const key in this.adapters) {
      destination[key] = this.adapters[key]!(source);
    }

    return destination;
  }

  mapArray(sources: TSource[]): TDestination[] {
    return sources.map((s) => this.map(s));
  }
}