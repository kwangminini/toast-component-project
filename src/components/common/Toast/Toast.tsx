import { CloseButton } from "~/components/common/Button";
import { IToastItem } from "~/components/common/Toast/types";
import { useToastContext } from "~/hooks/useToastContext";

export function Toast({ id, variant, message }: IToastItem) {
  const { removeToast } = useToastContext();
  const bgColor = variant === "success" ? "bg-toast-success-bg" : "bg-toast-bg";

  return (
    <div
      className={`px-6 py-2 rounded-sm drop-shadow-lg min-w-[300px] ${bgColor}`}
    >
      {message}
      <CloseButton
        className="absolute top-[calc(50%-14px)] right-0"
        onClick={() => removeToast(id)}
      />
    </div>
  );
}
