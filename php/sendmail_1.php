<?php
require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Создание экземпляра PHPMailer
$mail = new PHPMailer(true);

try {
    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = 'mail.hostland.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'host1853434@sborkamebelispb.ru';
    $mail->Password = 'ZpCQEhg5rk';
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';

    // Отправитель
    $mail->setFrom('host1853434@sborkamebelispb.ru', 'Форма обратной связи');

    // Получатель
    $mail->addAddress('sborkamebelisaintp@gmail.com', 'Имя получателя');

    // Тема письма
    $mail->Subject = 'Новая заявка';

    // Содержимое письма
    $userName = $_POST['username'];
    $userTel = $_POST['phone'];
    $userQuestion = $_POST['message'];

    // Форматируем содержимое письма
    $mailContent = "Имя: $userName\n" .
        "Номер телефона: $userTel\n" .
        "Вопрос: $userQuestion";
    $mail->Body = $mailContent;

    // Обработка прикрепленных файлов
    if (!empty($_FILES['files']['name'][0])) {
        for ($i = 0; $i < count($_FILES['files']['name']); $i++) {
            if ($_FILES['files']['error'][$i] === UPLOAD_ERR_OK) {
                $mail->addAttachment($_FILES['files']['tmp_name'][$i], $_FILES['files']['name'][$i]);
            }
        }
    }

    // Отправка письма
    $mail->send();
    echo "Письмо успешно отправлено!";

} catch (Exception $e) {
    echo "Ошибка при отправке письма: " . $mail->ErrorInfo;
}
