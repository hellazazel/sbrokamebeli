document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();

  //ВВЕДИТЕ ДЕЙСТВУЮЩИЙ НОМЕР WHATSAPP:
  const phone__number = "+7-951-146-41-96";

  const master = document.querySelector("#master").value; // переменная
  const old = document.querySelector("#old").value;
  const car = document.querySelector("#car").value;
  const experience = document.querySelector("#experience").value;
  const cash = document.querySelector("#cash").value;
  const response = document.querySelector("#response");

  response.classList.remove("fail");
  response.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=
  ${phone__number}&text=*Резюме*%0A
  %0A*Как вас зовут ?*%0A${master}
  %0A*Сколько вам лет*%0A ${old}
  %0A*У вас есть автомобиль*%0A ${car}
  %0A*Ваш опыт работы*%0A${experience}
  %0A*Желаемая зарплата*%0A ${cash}`;

  if (master === "" || old === "" || car === "" || experience === "") {
    response.classList.add("fail");
    response.innerHTML = `Некоторые данные отсутствуют. ${master}`;
    return false;
  }
  response.classList.remove("fail");
  response.classList.add("send");
  response.innerHTML = `Ваша заявка отправлена. ${master}`;

  window.open(url);
});
