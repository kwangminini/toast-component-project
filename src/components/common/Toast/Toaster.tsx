import { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ToastContainer, ToastController } from "~/components/common/Toast";
import {
  IToastItem,
  IToastParams,
  ToastPosition,
} from "~/components/common/Toast/types";
import { ToastContext } from "~/context/ToastContext";
import { getRandomId } from "~/utils/getRandomId";

interface IToasterProps {
  position?: ToastPosition;
  children: React.ReactNode;
}

export function Toaster({
  position = "bottom-right",
  children,
}: IToasterProps) {
  const [toastList, setToastList] = useState<IToastItem[]>([]);

  //toast 추가 함수
  const addToast = useCallback(
    ({
      variant = "default",
      message,
      duration = 3000,
      render,
    }: IToastParams) => {
      const newToastItem = {
        id: getRandomId(),
        variant,
        message,
        duration,
        render,
      };
      setToastList((prevToastList) => [newToastItem, ...prevToastList]);
    },
    []
  );

  //toast 삭제 함수
  const removeToast = useCallback((id: string) => {
    setToastList((prevToastList) =>
      prevToastList.filter((toastItem) => toastItem.id !== id)
    );
  }, []);
  //context provider value
  const toastContextValue = useMemo(
    () => ({ position, addToast, removeToast }),
    [position, addToast, removeToast]
  );

  return (
    <ToastContext.Provider value={toastContextValue}>
      {children}
      {toastList.length > 0 &&
        createPortal(
          <ToastContainer>
            {toastList.map((toastItem: IToastItem) => (
              <ToastController {...toastItem} key={toastItem.id} />
            ))}
          </ToastContainer>,
          document.body
        )}
    </ToastContext.Provider>
  );
}
