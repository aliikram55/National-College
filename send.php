<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


$name    = $_POST['name'];
$phone   = $_POST['phone'];
$email   = $_POST['email'];
$course  = $_POST['course'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'aliikram6151772@gmail.com';      
    $mail->Password   = 'efxk vewg dvws rqno';        
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('aliikram6151772@gmail.com', 'Website Contact Form');
    $mail->addAddress('aliikram6151772@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';

    $mail->Body = "
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Course:</strong> $course</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->send();
    echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
