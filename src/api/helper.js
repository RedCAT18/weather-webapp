function fetchLocation() {
  if (navigator.geolocation) {
    return new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej)
    );
  } else {
    return new Promise((res) => res({}));
  }
}

export { fetchLocation };
