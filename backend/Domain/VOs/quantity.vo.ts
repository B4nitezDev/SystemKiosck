export class QuantityVo {
  private constructor(private readonly value: number) {}

  public static Create(value: number): QuantityVo {
    if(value < 0) {
      throw new Error('QuantityVo must be greater than 0');
    }

    return new QuantityVo(value);
  }

  public GetValue(): number {
    return this.value;
  }
}