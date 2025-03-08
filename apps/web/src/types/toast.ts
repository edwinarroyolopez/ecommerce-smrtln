
export type ToastType = "success" | "error" | "warning";

export interface ToastState {
  toast: { message: string; type: ToastType } | null;
  showToast: (message: string, type: ToastType) => void;
}
