import { useToastContext } from "~/hooks/useToastContext";

interface IToastContainerProps {
  children: React.ReactNode;
}
const TOAST_CONTAINER_POSITION = {
  "top-left": { top: 10, left: 10, alignItems: "flex-start" },
  "top-center": {
    top: 10,
    left: "50%",
    transform: "translateX(-50%)",
    alignItems: "center",
  },
  "top-right": { top: 10, right: 10, alignItems: "flex-end" },
  "bottom-left": { bottom: 10, left: 10, alignItems: "flex-start" },
  "bottom-center": {
    bottom: 10,
    left: "50%",
    transform: "translateX(-50%)",
    alignItems: "center",
  },
  "bottom-right": { bottom: 10, right: 10, alignItems: "flex-end" },
};
export function ToastContainer({ children }: IToastContainerProps) {
  const { position } = useToastContext();
  return (
    <div
      className="fixed flex flex-col gap-2"
      style={TOAST_CONTAINER_POSITION[position]}
    >
      {children}
    </div>
  );
}
