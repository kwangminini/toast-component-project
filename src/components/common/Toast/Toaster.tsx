import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { ToastContainer, Toast, ToastContext } from "~/components/common/Toast";

import {
  IToastItem,
  IToastParams,
  ToastPosition,
} from "~/components/common/Toast/types";
import { createRandomId } from "~/utils/createRandomId";

interface IToasterProps {
  position?: ToastPosition;
  children: React.ReactNode;
}
const TOAST_CONTAINER_POSITION = {
  "top-left": { top: 10, left: 10, alignItems: "flex-start" },
  "top-center": {
    top: 10,
    left: "50%",
    transform: "translateX(-50%)",
    alignItems: "center",
  },
  "top-right": { top: 10, right: 10, alignItems: "flex-end" },
  "bottom-left": { bottom: 10, left: 10, alignItems: "flex-start" },
  "bottom-center": {
    bottom: 10,
    left: "50%",
    transform: "translateX(-50%)",
    alignItems: "center",
  },
  "bottom-right": { bottom: 10, right: 10, alignItems: "flex-end" },
};

export function Toaster({
  position = "bottom-right",
  children,
}: IToasterProps) {
  const [toastList, setToastList] = useState<IToastItem[]>([]);

  //toast 추가 함수
  const addToast = ({
    variant = "default",
    message,
    duration = 3000,
    render,
  }: IToastParams) => {
    const newToast = {
      id: createRandomId(),
      variant,
      message,
      duration,
      render,
    };
    setToastList((prevToastList) => [newToast, ...prevToastList]);
  };

  //toast 삭제 함수
  const removeToast = useCallback((id: string) => {
    setToastList((prevToastList) =>
      prevToastList.filter((toast) => toast.id !== id)
    );
  }, []);

  return (
    <ToastContext.Provider
      value={{ position, toastList, addToast, removeToast }}
    >
      {children}
      {toastList.length > 0 &&
        createPortal(
          <ToastContainer style={TOAST_CONTAINER_POSITION[position]}>
            {toastList.map((toastItem: IToastItem) => (
              <Toast
                {...toastItem}
                key={toastItem.id}
                removeToast={removeToast}
              />
            ))}
          </ToastContainer>,
          document.body
        )}
    </ToastContext.Provider>
  );
}