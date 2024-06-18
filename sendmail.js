// $(document).ready(function() {
//     let file = $("input[name=user__file1]")
//     file.change(function(){
//         F = this.files[0]
//         // console.log(F)
//     });
//     $('a[name=first_formBtn]').click(function(e) {
//       e.preventDefault(); // Предотвращаем отправку формы по умолчанию

//     //   var formData = new FormData($('.homepage__form')[0]);
//         let name = $("input[name=user__name1]").val()
//         let tel = $("input[name=user__tel1]").val()
//         let message = $("textarea[name=user__question1]").val()

//         // console.log(message)
//         // return;
//         $.ajax({
//           url: 'php/sendmail_1.php',
//           type: 'POST',
//           data: {
//             name: name,
//             tel: tel,
//             message: message,
//             F: F
//           },
//           contentType: 'html',
//         //   processData: false,
//           success: function(response) {
//             // Обработка успешного ответа
//             alert(response)
//           },
//           error: function(xhr, status, error) {
//             // Обработка ошибки
//           }
//         });
//     });
// });

$(document).ready(function () {
  let F = null;
  let file = $("input[name=user__file1]");
  file.change(function () {
    F = this.files[0];
  });

  $("a[name=first_formBtn]").click(function (e) {
    e.preventDefault();

    let name = $("input[name=user__name1]").val();
    let tel = $("input[name=user__tel1]").val();
    let message = $("textarea[name=user__question1]").val();

    if (name === "" || tel === "") {
      alert("Заполните поля ИМЯ и ТЕЛЕФОН!");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("tel", tel);
      formData.append("message", message);

      if (F !== null) {
        // Если файл был выбран, добавьте его к formData
        formData.append("F", F);
      }

      $.ajax({
        url: "php/sendmail_1.php",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
          alert(response);
        },
        error: function (xhr, status, error) {
          // Обработка ошибки
        },
      });
    }
  });

  let Fi = null;
  let file2 = $("input[name=user__file2]");

  file2.change(function () {
    Fi = this.files[0];
  });

  $("a[name=sec__form]").click(function (e) {
    e.preventDefault();

    let checkboxes = [
      (checkbox_1 = $("#homepage__checkbox-1")),
      (checkbox_2 = $("#homepage__checkbox-2")),
      (checkbox_3 = $("#homepage__checkbox-3")),
      (checkbox_4 = $("#homepage__checkbox-4")),
      (checkbox_5 = $("#homepage__checkbox-5")),
      (checkbox_6 = $("#homepage__checkbox-6")),
      (checkbox_7 = $("#homepage__checkbox-7")),
      (checkbox_8 = $("#homepage__checkbox-8")),
      (checkbox_9 = $("#homepage__checkbox-9")),
      (checkbox_10 = $("#homepage__checkbox-10")),
      (checkbox_11 = $("#homepage__checkbox-11")),
      (checkbox_12 = $("#homepage__checkbox-12")),
    ];

    let selectedCheckboxes = [];

    $.each(checkboxes, function (index, checkbox) {
      if (checkbox.is(":checked")) {
        selectedCheckboxes.push({
          checkbox: checkbox,
          value: checkbox.data("value"),
        });
      }
    });

    // console.log(selectedCheckboxes[0].value);
    let name = $("input[name=user__name2]").val();
    let tel = $("input[name=user__tel2]").val();
    let message = $("textarea[name=user__question2]").val();

    if (name == "" || tel == "") {
      alert("Заполните поля ИМЯ и ТЕЛЕФОН!");
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("tel", tel);
    formData.append("message", message);
    formData.append("F", Fi);
    formData.append("selectedCheckboxes", JSON.stringify(selectedCheckboxes));

    $.ajax({
      url: "php/sendmail2.php",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        alert(response);
      },
      error: function (xhr, status, error) {
        // Обработка ошибки
      },
    });
  });
});
