import { memo, useEffect } from "react";
import { CloseButton } from "~/components/common/Button";
import { IToastItem } from "~/components/common/Toast/types";

interface ITest extends IToastItem {
  removeToast: (id: string) => void;
}
export const Toast = memo(
  ({ id, variant, message, duration, render, removeToast }: ITest) => {
    useEffect(() => {
      const timer = removeToastTimer();

      return () => clearTimeout(timer);
    }, []);

    //시간이 지나면 toast에서 제거하는 타이머 설정
    const removeToastTimer = () => {
      return setTimeout(() => {
        removeToast(id);
      }, duration || 3000);
    };

    const handleBgColor = () => {
      return variant === "success" ? "bg-toast-success-bg" : "bg-toast-bg";
    };

    //render props가 있을 시 render component 렌더링
    if (render) {
      return <>{render()}</>;
    }

    return (
      <div
        className={`px-6 py-2 rounded-sm drop-shadow-lg min-w-[300px] ${handleBgColor()}`}
      >
        {message}
        <CloseButton
          className="absolute top-[calc(50%-14px)] right-0"
          onClick={() => removeToast(id)}
        />
      </div>
    );
  }
);
