# Документация по функции `modalController`

##### Описание

Этот контроллер создаёт эффект открытия и закрытия модального окна с плавной анимацией и блокировкой прокрутки основного контента страницы.

##### HTML-структура

```html
<section class="section">
  <h1 class="section__title">Модальное окно</h1>
  <button class="section__button open__button">Открыть</button>
</section>

<div class="modal popup__modal">
  <div class="modal__main">
    <h2 class="modal__title">Модальное окно</h2>
    <div class="modal__container">
      <!-- контент (например форма обратной связи) -->
    </div>
    <button class="modal__close"></button>
  </div>
</div>
```

##### Варианты открытия и закрытия попап:

###### Первый вариант

```js
// Вызов
const popup = modalController({ modal: ".popup__modal" });

// Открыть попап
popup.open();
// Закрыть попап
popup.close();
```

###### Второй вариант

```js
// Открыть попап
modalController({ modal: ".popup__modal" }).open();
// Закрыть попап
modalController({ modal: ".popup__modal" }).close();
```

###### Третий вариант

```js
// Вызов
modalController({
  modal: ".popup__modal", // Селектор модального окна
  btnOpen: ".open__button", // Селектор кнопок для открытия модального окна
  btnClose: ".modal__close", // Селектор кнопки для закрытия модального окна (не обязательно. можно указать другой селектор для закрытия попап)
  time: 400, // Время перехода для анимации (в миллисекундах)
});
```

###### Четвёртый вариант

```js
// Вызов
const popup = modalController({
  modal: ".popup__modal", // Селектор модального окна
  btnOpen: ".open__button", // Селектор кнопок для открытия модального окна
  btnClose: ".modal__close", // Селектор кнопки для закрытия модального окна (не обязательно. можно указать другой селектор для закрытия попап)
  time: 400, // Время перехода для анимации (в миллисекундах)
});

// Открыть попап
popup.open();
// Закрыть попап
popup.close();
```
