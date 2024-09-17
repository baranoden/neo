export interface RequestState<T> {
  loading: boolean;
  status: "idle" | "pending" | "success" | "error";
  data?: T;
}
