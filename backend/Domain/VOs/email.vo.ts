export class EmailVo {
  private constructor(private readonly email: string) {
  }

  public static Create(value: string): EmailVo {
    if(!value) {
      throw new Error('EmailVo is required');
    }

    if(!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
      throw new Error(
        'EmailVo is invalid'
      )

    if(value.length > 255){
      throw new Error('EmailVo is too long');
    }

    if(value.length < 3){
      throw new Error('EmailVo is too short');
    }

    if(value.indexOf('@') === -1){
      throw new Error('EmailVo is invalid');
    }

    return new EmailVo(value);
  }

  public GetValue(): string {
    return this.email;
  }
}