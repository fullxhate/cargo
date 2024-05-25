<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fio = htmlspecialchars($_POST['fio']);
    $organization = htmlspecialchars($_POST['organization']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $description = htmlspecialchars($_POST['description']);

    $to = "only_one_dream@mail.ru";
    $subject = "Новая заявка на перевозку";
    $message = "
    <html>
    <head>
    <title>Новая заявка на перевозку</title>
    </head>
    <body>
    <p>ФИО: $fio</p>
    <p>Название организации: $organization</p>
    <p>Номер телефона: $phone</p>
    <p>Дата перевозки: $date</p>
    <p>Описание того, что нужно перевезти: $description</p>
    </body>
    </html>
    ";

    // Для отправки HTML-письма должен быть установлен заголовок Content-type
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Дополнительные заголовки
    $headers .= 'From: <webmaster@example.com>' . "\r\n";

    // Отправляем письмо
    if (mail($to, $subject, $message, $headers)) {
        echo "Заявка успешно отправлена!";
    } else {
        echo "Ошибка при отправке заявки.";
    }
}
?>
