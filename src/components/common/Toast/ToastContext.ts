import { createContext, useContext } from "react";
import {
  IToastItem,
  IToastParams,
  ToastPosition,
} from "~/components/common/Toast/types";

export interface IToastContext {
  position: ToastPosition;
  toastList: IToastItem[];
  addToast: ({ variant, message, duration, render }: IToastParams) => void;
  removeToast: (id: string) => void;
}
export const ToastContext = createContext<IToastContext | null>(null);
