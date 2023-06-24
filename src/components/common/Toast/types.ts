export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type Variant = "default" | "success";

export interface IToastParams {
  variant?: Variant;
  message?: string;
  duration?: number;
  render?: () => React.ReactNode;
}

export interface IToastItem extends IToastParams {
  id: string;
}

export interface IToastProps extends IToastItem {
  removeToast: (id: string) => void;
}
