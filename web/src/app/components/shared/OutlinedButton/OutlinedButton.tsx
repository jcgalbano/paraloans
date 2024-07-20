import { TextButtonProps } from "../TextButton/TextButton.types";

export const OutlinedButton = ({ content, callback }: TextButtonProps) => {
  return (
    <button
      className="bg-general-white font-proximaNova text-base
    text-primary-500 uppercase rounded-rounded5px p-mdButton
    border-[1px] border-primary-400
    hover:bg-primary-50"
      onClick={callback}
    >
      {content}
    </button>
  );
};
