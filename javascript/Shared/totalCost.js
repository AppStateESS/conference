const totalCost = (registration, session) => {
  const {registerCost, guestCost, mealCost, mealService} = session
  const {discount, guestCount, mealTickets} = registration

  let cost = Number(registerCost) - Number(discount)

  const totalGuestCost = Number(guestCost) * Number(guestCount)
  cost = cost + totalGuestCost

  if (mealService == 1) {
    const totalMealCost = Number(mealCost) * Number(mealTickets)
    cost = cost + totalMealCost
  }

  return cost
}

export default totalCost
