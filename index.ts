function generateCombinations(sets: any[][]) {
  const combinations = Array<any>(Array<any>()); // Initialize with an empty combination

  for (const currentSet of sets) {
    const newCombinations = [];

    for (const item of currentSet) {
      for (const combination of combinations) {
        newCombinations.push([...combination, item]);
      }
    }

    combinations.length = 0;
    combinations.push(...newCombinations);
  }

  return combinations;
}

// Example usage
enum CustomerType{
    New,
    Old
}

enum LastMinuteOffer{
    TenDays,
    FiveDays,
    Started
}

// Example usage
const sets = [
  [CustomerType.New, CustomerType.Old],
  [LastMinuteOffer.FiveDays, LastMinuteOffer.TenDays, LastMinuteOffer.Started]
];

const combinations = generateCombinations(sets);
console.log(combinations);

function a(basePrice: number) {
  

}

combinations.forEach(combination => {
  console.log(CustomerType[combination[0]], LastMinuteOffer[combination[1]]);
})




