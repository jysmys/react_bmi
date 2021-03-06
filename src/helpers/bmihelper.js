export const calculateBmi = (weight, height, imperial) => {
  let bmiValue;
  if (!imperial) {
    bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
  } else {
    bmiValue = ((703 * weight) / (height * height)).toFixed(2);
  }
  const bmiMessage = setBMIMessage(bmiValue);
  return [bmiValue, bmiMessage];
};

const setBMIMessage = (finalBMI) => {
  if (finalBMI < 18.5) {
    return "Underweight";
  }
  if (finalBMI > 18.5 && finalBMI < 25) {
    return "Normal";
  }
  if (finalBMI > 25 && finalBMI < 30) {
    return "Overweight";
  }
  if (finalBMI > 30) {
    return "Obese";
  }
};
