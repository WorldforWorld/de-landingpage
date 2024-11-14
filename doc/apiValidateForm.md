# Документация по функции `validateForm`

##### Описание

Выполняет валидацию полей формы (email, name и message). Подсвечивает поля с некорректным вводом, добавляя класс "invalid".

### Функция возвращает объект типа `validateForm` с методами:

- `email` - true, если поле email прошло валидацию, иначе false.
- `name` - true, если поле name прошло валидацию, иначе false.
- `message` - true, если поле message прошло валидацию, иначе false.

##### Примеп использования

```js
const isValid = validateForm(form);

if (isValid.email && isValid.name && isValid.message) {
  // Какой-то код
}
```
