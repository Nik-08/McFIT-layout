let btn_1 = document.querySelector(".wp-form__btn_1");

let wpForm = document.querySelector(".wp-main__form"),
  inputs = wpForm.querySelectorAll(".wp-form__input");
let error_email_1 = document.querySelector(".wp-error_email_1"),
  notification_1 = document.querySelector(".wp-notification_1"),
  postRequest_1 = new XMLHttpRequest();

inputs.forEach((input) => {
  btn_1.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value == "") {
      notification_1.style.display = "none";
      error_email_1.style.display = "block";
      return false;
    } else {
      postRequest_1.open("post", "../php/send_mail.php");
      postRequest_1.send();
      if (postRequest_1.status != 200) {
        wpForm.style.display = "none";
        error_email_1.style.display = "none";
        input.value = "";
        notification_1.style.display = "block";
      } else {
        error_email_1.style.display = "block";
        notification_1.style.display = "none";
      }
    }
  });
});

let email = document.querySelector('[name="email"]');
let form = document.querySelector(".footer__btn");
let error_email = document.querySelector(".wp-error_email"),
  notification = document.querySelector(".wp-notification"),
  postRequest = new XMLHttpRequest();

form.addEventListener("click", function (event) {
  event.preventDefault();
  if (email.value == "") {
    notification.style.display = "none";
    error_email.style.display = "block";
    return false;
  } else {
    postRequest.open("post", "../php/send_mail.php");
    postRequest.send();
    if (postRequest.status != 200) {
      notification.style.display = "block";
      error_email.style.display = "none";
      email.value = "";
    } else {
      error_email.style.display = "block";
      notification.style.display = "none";
    }
  }
});
