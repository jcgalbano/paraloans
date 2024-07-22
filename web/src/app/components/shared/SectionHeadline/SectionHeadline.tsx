import { SectionHeadlineProps } from "./SectionHeadline.types";

export const SectionHeadline = ({ content }: SectionHeadlineProps) => {
  return (
    <div className="mb-7 w-full">
      <div className="font-proximaNova font-semibold text-xl border-b border-solid border-neutral-100 pb-3">
        {content}
      </div>
    </div>
  );
};
