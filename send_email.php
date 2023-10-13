<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "asmiejohn5@gmail.com"; // Your email address
    $subject = "New Contact Form Submission";
    $email = $_POST["email"];
    $comments = $_POST["comments"];

    $message = "Email: " . $email . "\n";
    $message .= "Comments:\n" . $comments;

    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
