export class PhoneNumberVo {
  private constructor(private readonly phoneNumber: string) {
  }

  public static Create(value: string): PhoneNumberVo {
    if(!value.includes('+')) {
      throw new Error('Invalid phone number');
    }

    return new PhoneNumberVo(value);
  }

  public GetValue(): string {
    return this.phoneNumber;
  }
}