export default function GetCurrentDate(userCreationDate) {
  const newDate = new Date();
  const currentDay = newDate.getDate();
  const currentMonth = newDate.getMonth() + 1;
  const currentYear = newDate.getFullYear();

  const userCreationDateFormated = userCreationDate.split('-');
  const userMonth = userCreationDateFormated[0].replace('0', '');
  const userDay = userCreationDateFormated[1].replace('0', '');
  const userYear = userCreationDateFormated[2];

  const userOriginDate = new Date(userYear, userMonth, userDay);
  const userCurrentDate = new Date(currentYear, currentMonth, currentDay);

  const userTrialPeriod =
    (userCurrentDate.getTime() - userOriginDate.getTime()) / (1000 * 3600 * 24);

  const datesObject = {
    userTrialPeriod,
    completeCurrentDate: `${currentMonth}/${currentDay}/${newDate.getFullYear()}`,
  };

  return datesObject;
}
