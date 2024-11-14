/**
 * @typedef {Object} formHandler
 * @property {Function} start - Начало отправки формы.
 * @property {Function} finish - Конец отправки формы.
 * @property {Function} success - Успешная отправка формы.
 * @property {Function} error - Ошибка формы.
 * @property {Function} reset - Сброс формы.
 */
/**
 * Контроллер для управления открытием и закрытием модального окна.
 * @function formHandler
 * @param {Object} selector - Селектор функции.
 * @returns {formHandler} - Объект с методами для успешной отправки формы, отправке формы и ошибки формы.
 */
export function formHandler(selector) {
  try {
    const formsWraps = document.querySelector(selector);

    const form = formsWraps.querySelector("form");
    const success = formsWraps.querySelector(".success");

    if (form && success) {
      const successSubmit = () => {
        form.style.display = "none";
        success.classList.add("visible");
        form.reset();
      };

      const loadingSubmit = (isLoading) => {
        const button = form.querySelector(".form__btn");
        button.classList.toggle("loading", isLoading);
        button.disabled = isLoading;
      };

      const startSubmit = () => {
        loadingSubmit(true);
      };

      const finishSubmit = () => {
        loadingSubmit(false);
      };
      const resetForm = () => {
        loadingSubmit(false);
        form.style.display = "";
        success.classList.remove("visible");
        form.reset();
      };

      const errorSubmit = (errorMessage) => {
        return errorMessage || "Ошибка";
      };

      return {
        start: startSubmit,
        finish: finishSubmit,
        success: successSubmit,
        error: errorSubmit,
        reset: resetForm,
      };
    }
  } catch (error) {}
}
