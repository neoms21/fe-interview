export const getFormattedPayment = (amount: number) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "GBP",
  });
};
