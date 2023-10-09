export interface Voice {
  name: string;
  ssmlGender: Gender;
  naturalSampleRateHertz: number;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
