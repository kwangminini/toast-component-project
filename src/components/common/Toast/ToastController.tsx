import { memo, useEffect } from "react";
import { Toast } from "~/components/common/Toast";
import { IToastProps } from "~/components/common/Toast/types";

export const ToastController = memo(
  ({ duration, ...toastItem }: IToastProps) => {
    const { id, removeToast, render } = toastItem;
    //toast auto remove 타이머 설정
    useEffect(() => {
      const timer = removeToastTimer();

      return () => clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //시간이 지나면 toast에서 제거하는 타이머 설정
    const removeToastTimer = () => {
      return setTimeout(() => {
        removeToast(id);
      }, duration || 3000);
    };
    //render props가 있을 시 render component 렌더링
    if (render) {
      return <>{render()}</>;
    }
    return <Toast {...toastItem} />;
  }
);
