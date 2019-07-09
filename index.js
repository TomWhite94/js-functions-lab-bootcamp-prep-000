function happyHolidays(greetings){
  return greetings;
}
happyHolidays("Happy holidays!")

function happyHolidaysTo(name) {
  
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo (`Alex`)

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}
happyHolidayTo(`Christmass`, `Alex`)

function holidayCountdown(days, holiday) {
    return `It's ${days} days until ${holiday}!`;
}
holidayCountdown(12, `Yom Khuledet`)
