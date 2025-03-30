export class Email {
  private constructor(private readonly email: string) {
  }

  public static Create(value: string): Email {
    if(!value) {
      throw new Error('Email is required');
    }

    if(!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
      throw new Error(
        'Email is invalid'
      )

    if(value.length > 255){
      throw new Error('Email is too long');
    }

    if(value.length < 3){
      throw new Error('Email is too short');
    }

    if(value.indexOf('@') === -1){
      throw new Error('Email is invalid');
    }

    return new Email(value);
  }

  public GetValue(): string {
    return this.email;
  }
}