export type Factory<T> = (...args: any[]) => T;
export type Implements<T> = {
  new (...args: any[]): T;
};

export class DIContainer {
  private instances: Map<any, any> = new Map<any, any>();
  private registrations = new Map<any, {
    deps: any[];
    resolver: (...args: any[]) => any;
  }>();

  public registerClass<T>(token: any, classRef: Implements<T>, deps: any[] = []) {
    this.registrations.set(token, {
      deps,
      resolver: (...args: any[]) => new classRef(...args),
    });
  }

  public registerFactory<T>(token: any, factory: Factory<T>, deps: any[] = []) {
    this.registrations.set(token, {
      deps,
      resolver: (...args: any[]) => factory(...args),
    });
  }

  public resolve<T>(token: any, resolvingStack: any[] = []): T {
    if (this.instances.has(token)) {
      return this.instances.get(token);
    }

    if (resolvingStack.includes(token)) {
      const cycle: string = [...resolvingStack, token].map(t => this.getTokenName(t)).join(" -> ");
      throw new Error(`Circular dependency detected: ${cycle}`);
    }

    const registration = this.registrations.get(token);
    if (!registration) {
      throw new Error(`Token not registered`);
    }

    resolvingStack.push(token);
    const resolvedDeps: unknown[] = registration.deps.map(dep => this.resolve(dep, resolvingStack));
    resolvingStack.pop();

    const instance: any = registration.resolver(...resolvedDeps);
    this.instances.set(token, instance);
    return instance;
  }

  private getTokenName(token: any): string {
    return typeof token === 'function' ? token.name : String(token);
  }
}

export const container: DIContainer = new DIContainer();
