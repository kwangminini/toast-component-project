import ButtonContainer from "~/components/common/Button/ButtonContainer";
import { IButtonProps } from "~/components/common/Button/types";
interface ITextButtonProps extends IButtonProps {
  text: string;
}
export function TextButton({ text, onClick, className }: ITextButtonProps) {
  return (
    <ButtonContainer onClick={onClick} className={className}>
      {text}
    </ButtonContainer>
  );
}
