# Документация по функции `sendFormData`

##### Описание

Функция для отправки данных формы на сервер. Возвращает `true`, если форма успешно отправлена, иначе `false`.

- `form` - Форма для отправки.
- `urlPath` - URL, на который отправляются данные формы.

### Функция возвращает:

`Promise`, который резолвится в `true` или `false`.

##### Примеп использования

```js
const form = document.querySelector(".form");
const urlPath = "https://mp2a61c2e84e64c2fd14.free.beeceptor.com/data";
form.addEventListener("submit", async (event) => {
  const isSuccess = await sendFormData(form, urlPath);

  if (isSuccess) {
    // Данные отправлены успешно
  } else {
    // Ошибка отправки данных
  }
});
```
