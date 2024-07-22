import Lender from "../../../data/lender.json"; // STUB: Lenders table in a DB

interface Lender {
  name: string;
  annualPR: number;
  appFee: number;
}

type LenderList = Lender[];

const all = (): LenderList => {
  const lenders: LenderList = Lender.lenderDetails;

  return lenders;
};

export default {
  all,
};
