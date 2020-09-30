const countdown = (futureDateUser) => {
  const actualDate = () => new Date().getTime();
  const futureDate = () => new Date(futureDateUser).getTime();
  const timestamp = () => futureDate() - actualDate();
  const seconds = () => Math.floor(timestamp() / 1000);
  const minutes = () => Math.floor(timestamp() / (60 * 1000));
  const hours = () => Math.floor(timestamp() / (60 * 60 * 1000));
  const days = () => Math.floor(timestamp() / (24 * 60 * 60 * 1000));

  return {
    seconds: seconds() % 60,
    minutes: minutes() % 60,
    hours: hours() % 24,
    days: days(),
  };
};

export default countdown;
