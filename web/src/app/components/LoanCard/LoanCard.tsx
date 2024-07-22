import { LoanCardProps } from "./LoanCard.types";

export const LoanCard = ({
  name,
  monthlyRepayment,
  interestRate,
  fees,
}: LoanCardProps) => {
  return (
    <div className="p-[20px] bg-general-white shadow rounded-[8px] mr-5 mb-5">
      <div className="font-proximaNova font-semibold text-neutral-800 pb-2 text-base">
        {name}
      </div>
      <div className="font-proximaNova text-neutral-800 text-sm">
        <div>Monthly Repayment: {monthlyRepayment}</div>
        <div>Interest Rate: {interestRate}</div>
        <div>Fees: {fees}</div>
      </div>
    </div>
  );
};
