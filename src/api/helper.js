function fetchLocation() {
  if (navigator.geolocation) {
    return new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej)
    );
  } else {
    return new Promise((res) => res({}));
  }
}

function getLocalTime(time, offset) {
  const totalOffset = new Date().getTimezoneOffset() * 60 - offset * -1;
  let localTime = new Date(time * 1000).setSeconds(totalOffset);
  let convertLocalTime = new Date(localTime)
    .toLocaleString('en-GB')
    .substr(12, 8);
  return convertLocalTime;
}

export { fetchLocation, getLocalTime };
