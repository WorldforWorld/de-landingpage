/**
 * Функция для отправки данных формы на сервер.
 * Возвращает true, если форма успешно отправлена, иначе false.
 *
 * @param {HTMLFormElement} form - Форма для отправки.
 * @param {string} urlPath - URL, на который отправляются данные формы.
 * @returns {Promise<boolean>} - Promise, который резолвится в true или false.
 */
export async function sendFormData(form, urlPath) {
  const formData = new FormData(form);

  try {
    const response = await fetch(urlPath, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      //   Какой-то код
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Ошибка при отправке данных формы:", error);
    return false;
  }
}
