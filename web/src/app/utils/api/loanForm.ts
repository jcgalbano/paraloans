import { FieldValues } from "react-hook-form";

const API_BASE_URL = "http://localhost:3000";

export const postLoanApplication = async (loanFormObj: FieldValues) => {
  try {
    const formBody = new URLSearchParams(loanFormObj).toString();

    const response = await fetch(`${API_BASE_URL}/api/loan-applications`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error: ${response.status} - ${
          errorData.message || response.statusText
        }`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to post loan application:", error);
    throw error;
  }
};
