export const formatCurrency = (num: number): string => {
  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  });

  return formatter.format(num);
};

export const formatRate = (rate: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  return formatter.format(rate);
};
