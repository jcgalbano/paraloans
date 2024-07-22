interface LoanApplicationData {
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

const createApplication = (
  loanApplication: LoanApplicationData
): LoanApplicationData => {
  const loanApplications = []; // STUB: LoanApps table in a DB

  loanApplications.push(loanApplication);

  return loanApplication;
};

export default {
  createApplication,
};
