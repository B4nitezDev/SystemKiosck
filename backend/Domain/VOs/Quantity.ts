export class Quantity {
  private constructor(private readonly value: number) {}

  public static Create(value: number): Quantity {
    if(value < 0) {
      throw new Error('Quantity must be greater than 0');
    }

    return new Quantity(value);
  }

  public GetValue(): number {
    return this.value;
  }
}