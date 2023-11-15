function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function relativeDays(timestamp) {
  const rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / oneDayInMs
  );

  return rtf.format(daysDifference, 'day');
}

const unixToDateTime = (unixTimestamp) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const relative = relativeDays(unixTimestamp);

  const date = new Date(Number(unixTimestamp));

  //   return date.toLocaleString('de-DE', {
  //     timeZone: 'Europe/Berlin',
  //   });

  const hours = date.getHours();
  const minutes = date.getMinutes();

  // 👇️ Format as hh:mm
  const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return `${relative}, ${month} ${day}-${year} ${time}`;
};

export default unixToDateTime;
