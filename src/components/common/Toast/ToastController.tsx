import { memo, useEffect } from "react";
import { Toast } from "~/components/common/Toast";
import { IToastItem } from "~/components/common/Toast/types";
import { useToastContext } from "~/hooks/useToastContext";

const DEFAUT_DURATION = 3000;

export const ToastController = memo(
  ({ duration, ...toastItem }: IToastItem) => {
    const { id, render } = toastItem;
    const { removeToast } = useToastContext();
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
      }, duration || DEFAUT_DURATION);
    };
    //render props가 있을 시 render component 렌더링
    if (render) {
      return <>{render()}</>;
    }
    return <Toast {...toastItem} />;
  }
);
