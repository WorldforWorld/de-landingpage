# Документация по функции `formHandler`

## Описание

Функция `formHandler` предназначена для управления отправкой формы, показывая состояние загрузки, успешную отправку и обработку ошибок.

### HTML обёртка

```html
<!-- Обёртка формы -->
<div class="form__wrap form__example">
  <!-- Сама форма -->
  <form class="form">
    <h2 class="form__title">Оставить заявку</h2>
    <span class="form__descr">Описание</span>
    <div class="form__field">
      <label class="form__label" for="name">Имя *</label>
      <input class="form__input" id="name" type="text" name="name" />
    </div>
    <!-- Тело формы -->
    <button class="form__btn btn" type="submit">
      <span class="submit-spinner"></span>Отправить
    </button>
  </form>
  <!-- Блок об успешной отправке формы -->
  <div class="success">
    <div class="success__icon svg-success-icon"></div>
    <div class="success__content">
      <div class="success__title">Ваша заявка успешно отправлена</div>
      <div class="success__description">
        Наши специалисты свяжутся с Вами в ближайшее время
      </div>
    </div>
  </div>
</div>
```

### Пример использования

```javascript
const myForm = formHandler(".form-wrapper");

// Начать отправку формы
myForm.start();

// Завершить отправку формы
myForm.finish();

// Вызвать успешную отправку формы
myForm.success();

// Вызвать обработку ошибки с текстом
myForm.error("Произошла ошибка при отправке формы.");

// Сбросить форму
myForm.reset();
```

### Функция возвращает объект типа formHandler с методами:

- `start` - Функция, вызываемая для начала процесса отправки формы. Используется для отображения состояния загрузки.
- `finish` - Функция, вызываемая после завершения процесса отправки формы. Используется для скрытия состояния загрузки.
- `success` - Функция, вызываемая при успешной отправке формы. Скрывает форму и показывает сообщение об успехе.
- `error` - Функция для обработки ошибок. Принимает текст сообщения об ошибке в качестве параметра.
- `reset` - Функция для сброса состояния формы, возвращая её в исходное состояние.
