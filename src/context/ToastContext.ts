import { createContext } from "react";
import { IToastParams, ToastPosition } from "~/components/common/Toast/types";

export interface IToastContext {
  position: ToastPosition;
  addToast: ({ variant, message, duration, render }: IToastParams) => void;
  removeToast: (id: string) => void;
}
export const ToastContext = createContext<IToastContext | null>(null);
