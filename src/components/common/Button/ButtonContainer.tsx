import { IButtonProps } from "~/components/common/Button/types";

interface IButtonContainerProps extends IButtonProps {
  children: React.ReactNode;
}
export default function ButtonContainer({
  children,
  onClick,
  className,
}: IButtonContainerProps) {
  return (
    <button
      className={`w-full border h-10 bg-white ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
