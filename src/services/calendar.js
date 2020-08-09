import dayjs from "dayjs";

export const createCalendar = date => {
  const firstDay = getMonth(date);
  const firstdayIndex = firstDay.day();
  const array = Array(42)
    .fill(0)
    .map((_, i) =>{
      const diffFromFirstDay = i - firstdayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");
      return day;
    });
  return array
};

export const getDate = ({year, month, date}) => {
  return dayjs(`${year}-${month}-${date}`)
};

export const getMonth = ({year, month}) => {
  return dayjs(`${year}-${month}`)
};

export const isFirstDay = day => day.date() === 1;

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const getNextMonth = date => {
  const day = getDate(date).add(1, "month");
  return formatDate(day)
};

export const getPreviousMonth = date => {
  const day = getDate(date).add(-1, "month");
  return formatDate(day); 
};

export const formatDate = day => ({
  year: day.year(),
  month: day.month() + 1,
  date: day.date(),
}); 

export const dayColor = () => {
  
}

