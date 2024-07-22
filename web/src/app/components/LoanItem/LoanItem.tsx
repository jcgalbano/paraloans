import { LoanItemProps } from "./Loanitem.types";

export const LoanItem = ({ headContent, content }: LoanItemProps) => {
  return (
    <div className="flex flex-col flex-start pr-8">
      <div className="font-proximaNova text-neutral-600 text-base">
        {headContent}
      </div>
      <div className="font-proximaNova text-neutral-800 text-lg">{content}</div>
    </div>
  );
};
