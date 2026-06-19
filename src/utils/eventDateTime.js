const parseClockTime = (value) => {
  const match = String(value || "")
    .trim()
    .match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?/i);

  if (!match) return null;

  let hours = Number(match[1]);
  const minutes = Number(match[2] || 0);
  const meridiem = match[3]?.toUpperCase();

  if (hours > 23 || minutes > 59 || (meridiem && (hours < 1 || hours > 12))) {
    return null;
  }

  if (meridiem) {
    hours %= 12;
    if (meridiem === "PM") hours += 12;
  }

  return { hours, minutes };
};

const parseEventDate = (dateValue) => {
  const value = String(dateValue || "").trim();
  const namedDate = value.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);

  if (namedDate) {
    const [, day, monthName, year] = namedDate;
    const month = new Date(`${monthName} 1, 2000`).getMonth();

    if (!Number.isNaN(month)) {
      const parsed = new Date(Number(year), month, Number(day));
      if (
        parsed.getFullYear() === Number(year) &&
        parsed.getMonth() === month &&
        parsed.getDate() === Number(day)
      ) {
        return parsed;
      }
    }
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export const getEventEndDateTime = (dateValue, timeValue) => {
  const date = parseEventDate(dateValue);
  if (!date) return null;

  // The last clock value is the end time for a range, or the event time otherwise.
  const clockValues = String(timeValue || "").match(/\d{1,2}(?::\d{2})?\s*(?:AM|PM)?/gi);
  const clock = parseClockTime(clockValues?.at(-1));

  if (clock) date.setHours(clock.hours, clock.minutes, 0, 0);
  else date.setHours(23, 59, 59, 999);

  return date;
};
