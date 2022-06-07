export type Nullish = null | undefined;
export type ObjType = Record<string, unknown>;
export interface ICustomError {
  code: number;
  message?: string;
  data?: unknown | Nullish;
}
export class CustomError extends Error {
  public code: number;
  public data: unknown;
  public message: string;
  constructor(code: number, message: string, data?: unknown | Nullish) {
    super();
    this.code = code;
    this.message = message;
    this.data = data || null;
  }
}
