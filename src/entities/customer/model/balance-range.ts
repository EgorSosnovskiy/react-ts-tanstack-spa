export function getBalanceRange(balance: number) {
  const delta = balance * 0.05;

  return {
    min: balance - delta,
    max: balance + delta,
  };
}
