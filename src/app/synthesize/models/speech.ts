export interface Speech {
  _id?: string;
  name?: string;
  language: string;
  voice: string;
  audio?: Blob;
  path?: string;
  createdAt?: Date;
}
