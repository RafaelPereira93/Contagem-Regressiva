const inserirNumeroZero = (numero) => {
  const numeroConvertido = String(numero);
  const comprimentoDoNumero = numeroConvertido.length;

  return comprimentoDoNumero === 1
    ? `0${numeroConvertido}`
    : `${numeroConvertido}`;
};

const pluralOuSingular = (numero, singular, plural) =>
  numero < 2 ? singular : plural;

const inserirDataNoDom = (days, hours, minutes, seconds) => {
  const countdown = document.querySelector(".box-countdown");

  countdown.innerHTML = `
    <h3>Faltam</h3>
      <div class="countdown">
        <div data-set="days">
          <div class="days">${inserirNumeroZero(days)}</div>
          <div class="days-name">${pluralOuSingular(days, "dia", "dias")}</div>
        </div>
        <div data-set="hours">
          <div class="hours">${inserirNumeroZero(hours)}</div>
          <div class="hours-name">${pluralOuSingular(
            hours,
            "hora",
            "horas"
          )}</div>
        </div>
        <div data-set="minutes">
          <div class="minutes">${inserirNumeroZero(minutes)}</div>
          <div class="minutes-name">${pluralOuSingular(
            minutes,
            "minuto",
            "minutos"
          )}</div>
        </div>
        <div data-set="seconds">
          <div class="seconds">${inserirNumeroZero(seconds)}</div>
          <div class="seconds-name">${pluralOuSingular(
            seconds,
            "segundo",
            "segundos"
          )}</div>
          </div>
        </div>
    <h4>para alcançar a data que você escolheu.</h4>
  `;
};

export default inserirDataNoDom;
