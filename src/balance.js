export function BalanceService() {
  let balance = 0

  function increase(amount) {
    balance += amount
  }

  function decrease(amount) {
    if (balance > amount) {
      balance -= amount
      return true
    }
    return false
  }

  return {
    increase,
    decrease
  }
}
