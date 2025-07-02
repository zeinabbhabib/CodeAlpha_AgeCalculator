function calculateAge() {
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const dayError = document.getElementById("day-error");
  const monthError = document.getElementById("month-error");
  const yearError = document.getElementById("year-error");

  const resultYears = document.getElementById("years");
  const resultMonths = document.getElementById("months");
  const resultDays = document.getElementById("days");

  
  dayError.textContent = "";
  monthError.textContent = "";
  yearError.textContent = "";

  const currentYear = new Date().getFullYear();

 
  let isValid = true;

  if (isNaN(day) || day < 1 || day > 31) {
    dayError.textContent = "Invalid day";
    isValid = false;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    monthError.textContent = "Invalid month";
    isValid = false;
  }

  if (isNaN(year) || year < 1900 || year > currentYear) {
    yearError.textContent = "Invalid year";
    isValid = false;
  }

  
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  if (
    isValid &&
    (birthDate.getDate() !== day ||
      birthDate.getMonth() !== month - 1 ||
      birthDate.getFullYear() !== year)
  ) {
    dayError.textContent = "Invalid date";
    isValid = false;
  }

  if (isValid && birthDate > today) {
    yearError.textContent = "Date is in the future";
    isValid = false;
  }

  if (!isValid) {
    
    resultYears.textContent = "--";
    resultMonths.textContent = "--";
    resultDays.textContent = "--";
    return;
  }

 
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  resultYears.textContent = ageYears;
  resultMonths.textContent = ageMonths;
  resultDays.textContent = ageDays;
}
