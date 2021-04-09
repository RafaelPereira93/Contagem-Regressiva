export default class Countdown {
  constructor(futureDate) {
    this.futureDate = new Date(futureDate);
  }

  get _actualDate() {
    return new Date();
  }

  get _timestamp() {
    return this.futureDate;
  }

  get _difference() {
    return this._timestamp.getTime() - this._actualDate.getTime();
  }

  get seconds() {
    return Math.floor(this._difference / 1000);
  }

  get minutes() {
    return Math.floor(this._difference / (60 * 1000));
  }

  get hours() {
    return Math.floor(this._difference / (60 * 60 * 1000));
  }

  get days() {
    return Math.floor(this._difference / (24 * 60 * 60 * 1000));
  }

  get total() {
    const seconds = this.seconds % 60;
    const minutes = this.minutes % 60;
    const hours = this.hours % 24;
    const days = this.days;

    return {
      days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
}
