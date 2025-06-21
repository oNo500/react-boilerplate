export interface APIResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}
