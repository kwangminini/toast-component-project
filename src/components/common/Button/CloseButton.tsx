import { IButtonProps } from "~/components/common/Button/types";

export function CloseButton({ className, onClick }: IButtonProps) {
  return (
    <button
      className={`w-6 after:content-["\\00d7"] after:text-xl ${
        className ?? ""
      }`}
      onClick={onClick}
    ></button>
  );
}
