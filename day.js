function dayOfTheWeek(now) {
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfTheWeek[now.getDay()];
}
