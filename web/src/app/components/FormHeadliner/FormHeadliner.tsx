import { FormHeadlinerProps } from "./FormHeadliner.types";

export const FormHeadliner = ({ text, subtext }: FormHeadlinerProps) => {
  return (
    <div className="pb-10">
      <h1 className="font-proximaNovaCondensed text-h1 font-bold pb-2">
        {text}
      </h1>
      <p className="font-proximaNova text-text-lg text-neutral-700">
        {subtext}
      </p>
    </div>
  );
};
