export const getFlyTime = (origin, segments) => {
  const value = origin ? 0 : 1;
  const originDate = new Date(segments[value].date).getTime();
  const originHours = new Date(originDate).getHours();
  const destinationDate = originDate + segments[value].duration * 60000;
  const destinationMinutes = new Date(destinationDate).getMinutes();
  const hours = originHours < 10 ? `0${originHours}` : originHours;
  const minutes = destinationMinutes < 10 ? `0${destinationMinutes}` : destinationMinutes;
  return `${hours} : ${minutes}`;
};

export const convertMinutes = (origin, segments) => {
  const value = origin ? 0 : 1;
  const hours = Math.floor(segments[value].duration / 60);
  const minutes = segments[value].duration - hours * 60;
  const days = Math.floor(hours / 24);
  const resultDays = hours > 23 ? `${days}д ` : '';
  const resultHours = hours < 10 ? `0${hours}` : `${hours}ч`;
  const resultMinutes = minutes < 10 ? `0${minutes}` : `${minutes}м`;
  return `${resultDays} ${resultHours} ${resultMinutes}`;
};

export const formatTransfers = (origin, segments) => {
  const value = origin ? 0 : 1;
  switch (true) {
    case segments[value].stops.length > 1: {
      return `${segments[value].stops.length} пересадки`;
    }
    case segments[value].stops.length === 1: {
      return '1 пересадка';
    }
    default: {
      return 'Без пересадок';
    }
  }
};
