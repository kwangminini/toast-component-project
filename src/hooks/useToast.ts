import { IToastParams } from "~/components/common/Toast/types";
import { useToastContext } from "~/hooks/useToastContext";

export default function useToast() {
  const { addToast } = useToastContext();

  const toast = ({ variant, message, duration, render }: IToastParams) => {
    addToast({ variant, message, duration, render });
  };
  return toast;
}
