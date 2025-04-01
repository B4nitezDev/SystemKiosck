import "reflect-metadata";

type Constructor<T = any> = new (...args: any[]) => T;
type ConstructorOrFactory<T> = Constructor<T> | (() => T);

export class DIContainer {
  private registrations: Map<symbol, ConstructorOrFactory<any>> = new Map<symbol, ConstructorOrFactory<any>>();
  private singletons: Map<symbol, any> = new Map<symbol, any>();

  register<T>(token: symbol, resolver: ConstructorOrFactory<T>) {
    this.registrations.set(token, resolver);
  }

  resolve<T>(token: symbol): T {
    if (this.singletons.has(token))
      return this.singletons.get(token);

    const resolver: ConstructorOrFactory<any> | undefined = this.registrations.get(token);

    if (!resolver)
      throw new Error(`No dependency found for ${token.toString()}`);

    let instance: any;

    if (this.isConstructor(resolver)) {
      const paramTypes: Constructor[] = Reflect.getMetadata("design:paramtypes", resolver) || [];

      const dependencies: unknown[] = paramTypes.map((depType: Constructor<any>) => {
        const tokenEntry: [symbol, ConstructorOrFactory<any>] | undefined = [...this.registrations.entries()].find(([_, value]) => value === depType);
        if (!tokenEntry) throw new Error(`Unregistered dependency: ${depType.name}`);
        return this.resolve(tokenEntry[0]);
      });

      instance = new resolver(...dependencies);
    } else {
      instance = (resolver as () => T)();
    }

    this.singletons.set(token, instance);
    return instance;
  }

  private isConstructor<T>(resolver: ConstructorOrFactory<T>): resolver is Constructor<T> {
    return typeof resolver === "function" && resolver.prototype && resolver.prototype.constructor.name !== "Object";
  }
}

export const container = new DIContainer();
