import { useContext } from "react";
import { IToastContext, ToastContext } from "~/components/common/Toast";

/**
 * toast context 에러처리 포함한 커스텀 훅
 * @returns {IToastContext} toastContext
 */
export const useToastContext = (): IToastContext => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error("ToastContext is required");
  }

  return toastContext;
};
