import { LoanHeadProps } from "./LoanHead.types";

export const LoanHead = ({
  headContent,
  content,
  footContent,
}: LoanHeadProps) => {
  return (
    <div className="flex flex-col">
      <div className="font-proximaNova text-neutral-800 text-lg">
        {headContent}
      </div>
      <div className="font-proximaNova font-semibold text-neutral-800 text-h1">
        {content}
      </div>
      <div className="font-proximaNova text-neutral-600 text-sm">
        {footContent}
      </div>
    </div>
  );
};
