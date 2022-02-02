let email = document.querySelector('[name="email"]');
let form = document.querySelector('[type="submit"]');
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
