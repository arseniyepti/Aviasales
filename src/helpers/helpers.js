export const getFlyTime = (origin, segments) => {
  const value = origin ? 0 : 1;
  const originDate = new Date(segments[value].date).getTime();
  const originHours = new Date(originDate).getHours();
  const destinationDate = originDate + segments[value].duration * 60000;
  const destinationMinutes = new Date(destinationDate).getMinutes();
  const hours = originHours < 10 ? `0${originHours}` : originHours;
  const minutes = destinationMinutes < 10 ? `0${destinationMinutes}` : destinationMinutes;
  return `${hours}:${minutes}`;
};

export const convertMinutes = (origin, segments) => {
  const value = origin ? 0 : 1;
  const hours = Math.floor(segments[value].duration / 60);
  const minutes = segments[value].duration - hours * 60;
  const days = Math.floor(hours / 24);
  const resultDays = hours > 23 ? `${days}д ` : '';
  const resultHours = hours < 10 ? `0${hours}ч` : `${hours}ч`;
  const resultMinutes = minutes < 10 ? `0${minutes}м` : `${minutes}м`;
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

export const setControlledCheckbox = (checkboxValues, checked, id) => {
  return checkboxValues.map((item) => {
    if (id === 'AllTransfers' || id === item.checkboxId) {
      return { ...item, checked };
    }
    return item;
  });
};

export const setControlledCheckboxAlltransfers = (checkboxValues) => {
  const checkAllCheckboxValues = checkboxValues.filter((el) => el.checkboxId !== 'AllTransfers');
  return checkboxValues.map((item) => {
    if (checkAllCheckboxValues.every((el) => el.checked)) {
      return { ...item, checked: true };
    }
    if (checkAllCheckboxValues.some((el) => !el.checked)) {
      return item.checkboxId === 'AllTransfers' ? { ...item, checked: false } : item;
    }
    return item;
  });
};

export const sortTicketsHelper = (activeBtn, origin, destination) => {
  if (activeBtn === 'cheapest') {
    return origin.price - destination.price;
  }
  return (
    origin.segments[0].duration +
    origin.segments[1].duration -
    (destination.segments[0].duration + destination.segments[1].duration)
  );
};

export const filterTransfers = (tickets, activeBtn, checkboxValues) => {
  const filterCheckboxValues = checkboxValues.reduce((acc, { checked, filterId }) => {
    return checked ? [...acc, filterId] : acc;
  }, []);
  const sortTickets = tickets.sort((origin, destination) => {
    return sortTicketsHelper(activeBtn, origin, destination);
  });
  const filterTickets = sortTickets.filter(({ segments }) => {
    return (
      filterCheckboxValues.includes(segments[0].stops.length) ||
      filterCheckboxValues.includes(segments[1].stops.length)
    );
  });
  return filterCheckboxValues.length === 0 ? [] : filterTickets;
};
