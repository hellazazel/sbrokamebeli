<?php
require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Создание экземпляра PHPMailer
$mail = new PHPMailer(true);

try {
    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';// mail.hostland.ru
    $mail->SMTPAuth = true;
    $mail->Username = 'sborkamebelisaintp@gmail.com'; // host1853434  host1853434@sborkamebelispb.ru
    $mail->Password = 'njho bwus cfnf vppy';//ZpCQEhg5rk
    $mail->Port = 587;
  	$mail->CharSet = 'UTF-8';

    // Отправитель
    $mail->setFrom('host1853434@sborkamebelispb.ru', 'host1853434@sborkamebelispb.ru');

    // Получатель
    $mail->addAddress('sborkamebelisaintp@gmail.com', 'Имя получателя');

    // Тема письма
    $mail->Subject = 'Новая заявка';

    // Содержимое письма
    $userName = $_POST['name'];
    $userTel = $_POST['tel'];
    $userQuestion = $_POST['message'];
    $file = $_FILES['F'];

    // Обработка прикрепленного файла, если он есть
    if ($_FILES['F']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['F']['tmp_name'];
        $fileName = $_FILES['F']['name'];
        $fileSize = $_FILES['F']['size'];
        $fileType = $_FILES['F']['type'];

        // Выполните необходимые действия с загруженным файлом, например, сохранение на диск или вложение в письмо

        // Пример вложения файла в письмо
        $mail->addAttachment($fileTmpPath, $fileName);
    }

    // Форматируем содержимое письма
    $mailContent = "Имя: $userName\n" .
                   "Номер телефона: $userTel\n" .
                   "Вопрос: $userQuestion";

    $mail->Body = $mailContent;
    
    // Отправка письма
    $mail->send();

    echo "Письмо успешно отправлено!";
    
} catch (Exception $e) {
    echo "Ошибка при отправке письма: " . $mail->ErrorInfo;
}
?>