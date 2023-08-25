import dayjs from "dayjs";

function getSortableDate() {
  return dayjs().format("YYYY-MM-DD_HH:mm:ss");
}

export default getSortableDate;
