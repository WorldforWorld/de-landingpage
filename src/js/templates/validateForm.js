/**
 * Выполняет валидацию полей формы (email, name и message).
 * Подсвечивает поля с некорректным вводом, добавляя класс "invalid".
 *
 * @param {HTMLFormElement} form - Элемент формы, содержащий проверяемые поля.
 * @returns {Object} - Объект с результатами валидации для каждого поля.
 * @property {boolean} email - True, если поле email прошло валидацию, иначе false.
 * @property {boolean} name - True, если поле name прошло валидацию, иначе false.
 * @property {boolean} message - True, если поле message прошло валидацию, иначе false.
 */
export function validateForm(form) {
  /**
   * Проверяет поле email на соответствие стандартному формату email.
   * @param {HTMLInputElement} email - Поле ввода email.
   * @returns {boolean} - True, если email корректен, иначе false.
   */
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email.value);
    email.classList.toggle("invalid", !isValid);
    return isValid;
  };

  /**
   * Проверяет поле name на заполненность (не пустое).
   * @param {HTMLInputElement} name - Поле ввода имени.
   * @returns {boolean} - True, если поле name заполнено, иначе false.
   */
  const validateName = (name) => {
    const isValid = name.value.trim().length > 0;
    name.classList.toggle("invalid", !isValid);
    return isValid;
  };

  /**
   * Проверяет поле message на заполненность (не пустое).
   * @param {HTMLTextAreaElement} message - Поле ввода сообщения.
   * @returns {boolean} - True, если поле message заполнено, иначе false.
   */
  const validateMessage = (message) => {
    const isValid = message.value.trim().length > 0;
    message.classList.toggle("invalid", !isValid);
    return isValid;
  };

  return {
    email: validateEmail(form.querySelector('input[type="email"]')),
    name: validateName(form.querySelector('input[name="name"]')),
    message: validateMessage(form.querySelector('textarea[name="message"]')),
  };
}
