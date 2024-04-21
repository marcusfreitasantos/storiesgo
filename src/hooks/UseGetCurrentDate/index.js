export default function UseGetCurrentDate() {
  const newDate = new Date();
  const currentDay = newDate.getDate();
  const currentMonth = newDate.getMonth() + 1;

  const datesObject = `${currentMonth}/${currentDay}/${newDate.getFullYear()}`;

  return datesObject;
}
