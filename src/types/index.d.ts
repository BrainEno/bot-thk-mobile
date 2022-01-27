// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="./gql.d.ts"/>

export interface Cookie {
  name: string;
  value: string;
  path?: string;
  domain?: string;
  version?: string;
  expires?: string;
  secure?: boolean;
  httpOnly?: boolean;
}

export interface Cookies {
  [key: string]: Cookie;
}
