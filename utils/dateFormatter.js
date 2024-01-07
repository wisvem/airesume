export function formatDateRange(startDate, endDate, ongoing) {
  let startDateString = new Date(startDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });

  let endDateString = "";
  if (ongoing) {
    endDateString = "Ongoing";
  } else if (endDate) {
    endDateString = new Date(endDate).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    });
  }

  return `${startDateString} - ${endDateString}`;
}
