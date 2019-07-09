function happyHolidays(){
  return ("Happy holidays!");
}

function happyHolidaysTo(name) {
  
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo (`you`)

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}
happyHolidayTo(`Christmass`, `Alex`)

function holidayCountdown(days, holiday) {
    return `It's ${days} days until ${holiday}!`;
}
holidayCountdown(12, `Yom Khuledet`)
