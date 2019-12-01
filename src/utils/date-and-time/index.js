const defaultOptions = {
  day: 'numeric',
  month: 'long',
  weekday: 'short',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
};
export function timeDifference(previous) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const current = new Date();
  const previousDate = new Date(previous);
  const elapsed = current - previousDate;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  }
  if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return Math.round(elapsed / msPerYear) + ' years ago';
  }
}

export function toLocalTime(date, language) {
  return date.toLocaleString(language, defaultOptions);
}

export function toLocalByIntlApi(date, language) {
  return new Intl.DateTimeFormat(language).format(date);
}

export function convertTimeToLocalTime(date, language) {
  if (Intl in window) {
    return toLocalByIntlApi(date, language);
  }
  return toLocalTime(date, language);
}
