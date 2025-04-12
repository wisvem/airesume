export function formatDateRange(startDate, endDate, ongoing) {
  // Parse startDate
  const [startYear, startMonth] = startDate.split("-");
  const startDateObj = new Date(startYear, startMonth - 1); // Meses en JavaScript son 0-indexados
  const startDateString = startDateObj.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });

  let endDateString = "";
  if (ongoing) {
    endDateString = "Ongoing";
  } else if (endDate) {
    // Parse endDate
    const [endYear, endMonth] = endDate.split("-");
    const endDateObj = new Date(endYear, endMonth - 1);
    endDateString = endDateObj.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    });
  }

  return `${startDateString} - ${endDateString}`;
}
