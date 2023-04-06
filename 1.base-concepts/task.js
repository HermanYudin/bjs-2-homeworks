"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let d;
  d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
      return [];
  }

  else if(d === 0) {
      return [-b / (2 * a)];
  } else if (d > 0) {
      return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = percent / 100 / 12;
  amount = amount - contribution;
  let S = amount;
  let P = percent;
  let n = countMonths;

  let payments = S * (P + (P / (((1 + P) ** n) - 1)));
  let summ = payments * n;
  summ = parseFloat(summ);

  return Number(parseFloat(summ).toFixed(2));
}

