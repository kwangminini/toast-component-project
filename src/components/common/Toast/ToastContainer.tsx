import { CSSProperties } from "react";

interface IToastContainerProps {
  children: React.ReactNode;
  style?: CSSProperties;
}
export function ToastContainer({ children, style }: IToastContainerProps) {
  return (
    <div className="fixed flex flex-col gap-2" style={style}>
      {children}
    </div>
  );
}
