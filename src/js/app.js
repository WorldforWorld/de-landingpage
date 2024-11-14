import { formHandler } from "./templates/formHandler.js";
import { modalController } from "./templates/modalController.js";
import { sendFormData } from "./templates/sendFormData.js";
import { validateForm } from "./templates/validateForm.js";

document.addEventListener("DOMContentLoaded", () => {
  const popup = modalController({ modal: ".main__modal" });
  const openModal = document.querySelector(".open__modal");
  openModal.addEventListener("click", () => popup.open());

  // Отправка формы
  const form = document.querySelector(".form");
  const urlPath = "https://mp2a61c2e84e64c2fd14.free.beeceptor.com/data";
  const myForm = formHandler(".main__form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const isValid = validateForm(form);
      if (isValid.email && isValid.name && isValid.message) {
        myForm.start();

        const isSuccess = await sendFormData(form, urlPath);

        if (isSuccess) {
          myForm.finish();
          myForm.success();
        } else {
          myForm.error();
        }
      }
    } catch (error) {
      myForm.error();
    }
  });
});
