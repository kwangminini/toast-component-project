import { IButtonProps } from "~/components/common/Button/types";

export function CloseButton({ className, onClick }: IButtonProps) {
  return (
    <button
      className={`w-6 flex items-center justify-center ${className ?? ""}`}
      onClick={onClick}
    >
      x
    </button>
  );
}
