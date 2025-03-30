export class PhoneNumber {
  private constructor(private readonly phoneNumber: string) {
  }

  public static Create(value: string): PhoneNumber {
    if(!value.includes('+')) {
      throw new Error('Invalid phone number');
    }

    return new PhoneNumber(value);
  }

  public GetValue(): string {
    return this.phoneNumber;
  }
}