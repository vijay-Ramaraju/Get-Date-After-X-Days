const addDays = require("date-fns/addDays");
const getDateAterXdates = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = getDateAterXdates;
