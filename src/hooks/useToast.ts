import { useToastContext } from "~/hooks/useToastContext";

export default function useToast() {
  const { addToast } = useToastContext();

  return addToast;
}
