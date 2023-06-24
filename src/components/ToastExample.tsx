import { TextButton } from "~/components/common/Button";
import useToast from "~/hooks/useToast";

export default function ToastExample() {
  const toast = useToast();
  return (
    <div className="w-full flex items-center gap-3 px-20">
      <TextButton
        text="Default"
        onClick={() =>
          toast({
            message: "Successfully toasted!",
            duration: 5000,
          })
        }
      />
      <TextButton
        text="Success"
        onClick={() =>
          toast({
            variant: "success",
            message: "Successfully toasted!",
            duration: 2000,
          })
        }
      />
      <TextButton
        text="Custom"
        onClick={() =>
          toast({
            render: () => <div className="bg-red-300 w-32">Hello World</div>,
          })
        }
      />
    </div>
  );
}
