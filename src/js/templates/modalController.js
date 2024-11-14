/**
 * Контроллер для управления прокруткой страницы при открытии/закрытии модальных окон.
 * @namespace scrollController
 */
const scrollController = {
  scrollPosition: 0,

  disabledScroll() {
    this.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${this.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
    document.documentElement.style.scrollBehavior = "unset";
  },

  enabledScroll() {
    document.body.style.cssText = "";
    window.scroll({ top: this.scrollPosition });
    document.documentElement.style.scrollBehavior = "";
  },
};

/**
 * @typedef {Object} ModalController
 * @property {Function} open - Открывает модальное окно.
 * @property {Function} close - Закрывает модальное окно.
 */

/**
 * Контроллер для управления открытием и закрытием модального окна.
 * @function modalController
 * @param {Object} config - Конфигурационный объект для модального окна.
 * @param {string} config.modal - Селектор модального окна.
 * @param {string} config.btnOpen - Селектор кнопок, открывающих модальное окно.
 * @param {string} [config.btnClose=""] - Селектор кнопки или элемента, закрывающего модальное окно.
 * @param {number} [config.time=300] - Время перехода для анимации (в миллисекундах).
 * @returns {ModalController} - Объект с методами для открытия и закрытия модального окна.
 */
export function modalController({ modal, btnOpen, btnClose = "", time = 300 }) {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  if (modalElem !== null) {
    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;
    const closeHandler = () => {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
        scrollController.enabledScroll();
      }, time);

      window.removeEventListener("keydown", closeModal);
    };
    const closeModal = (event) => {
      const target = event ? event.target : null;

      if (
        !event ||
        target === modalElem ||
        (".modal__close" && target.closest(".modal__close")) ||
        event.code === "Escape"
      ) {
        closeHandler();
      }
    };

    const openModal = () => {
      modalElem.style.visibility = "visible";
      modalElem.style.opacity = 1;
      window.addEventListener("keydown", closeModal);
      scrollController.disabledScroll();
    };

    buttonElems.forEach((btn) => {
      btn.addEventListener("click", openModal);
    });

    modalElem.addEventListener("click", closeModal);
    if (btnClose !== "") {
      document.querySelector(btnClose).addEventListener("click", closeHandler);
    }

    return {
      open: openModal,
      close: closeModal,
    };
  }
}
