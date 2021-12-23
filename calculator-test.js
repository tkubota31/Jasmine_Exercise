
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {
    loanAmount: 5000,
    yearsAmount: 5,
    rateAmount: 3
  }

  expect(calculateMonthlyPayment(values)).toEqual("89.84");
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values = {
    loanAmount: 10000,
    yearsAmount: 5,
    rateAmount: 2.8
  }

  expect(calculateMonthlyPayment(values)).toEqual("178.80");
});

/// etc
