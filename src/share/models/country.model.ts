import { Deserializable } from './deserializable.model';

export class Country implements Deserializable {
  name: string;

  deserialize(input: any) {
    this.name = input.name.common;
    return this;
  }
}
