import Countdown from "./countdown.js";
import inserirDataNoDom from "./insertIntoDom.js";

const form = document.querySelector("form");
const input = document.querySelector('[data-js="date"]');
const boxCountdown = document.querySelector(".box-countdown");
const boxDica = document.querySelector(".dica");
const erro = document.querySelector(".erro");

const showCountdown = () => {
  const classDNone = boxCountdown.classList.contains("d-none");

  if (classDNone) {
    boxCountdown.classList.remove("d-none");
  }

  resetarCampoDeInput();
};

const resetarCampoDeInput = () => form.reset();

const verificarSeADataEValida = ({ days }) => {
  const dataInvalida = days < 0 || isNaN(days);

  if (dataInvalida) {
    erro.classList.remove("d-none");

    setTimeout(() => {
      erro.classList.add("d-none");
    }, 1000);
  }

  return dataInvalida ? true : false;
};

const salvarTimerNoLocalStorage = (id) =>
  localStorage.setItem("temporizador", id);

const ativarClearInterval = () => {
  const temporizador = localStorage.getItem("temporizador");

  if (temporizador) {
    clearInterval(temporizador);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = input.value;

  if (inputValue.length === 0) {
    return;
  }

  const { total } = new Countdown(inputValue);

  if (verificarSeADataEValida(total)) {
    resetarCampoDeInput();
    return;
  }

  ativarClearInterval();

  const temporizadorData = setInterval(() => {
    const { total } = new Countdown(inputValue);
    inserirDataNoDom(total);
  }, 1000);

  salvarTimerNoLocalStorage(temporizadorData);
  showCountdown();
};

const fecharModalDica = ({ target }) => {
  const isDataSet = target.dataset["dica"] !== undefined;

  if (isDataSet) {
    boxDica.classList.add("d-none");
  }

  input.focus();
};

form.addEventListener("submit", handleSubmit);

boxDica.addEventListener("click", fecharModalDica);
