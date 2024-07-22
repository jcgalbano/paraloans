interface LoanAppData {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
  address: string;
  employerName: string;
  annualIncome: number;
  employmentStatus: string;
  price: string;
  deposit: string;
  loanTerm: number;
  loanPurpose: string;
}

const createApp = (loanApp: LoanAppData): LoanAppData => {
  const loanApps = []; // STUB: LoanApps table in a DB

  loanApps.push(loanApp);

  return loanApp;
};

export default {
  createApp,
};
