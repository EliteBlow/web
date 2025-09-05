<?php
// server/send.php
// Pequeño script PHP para recibir el formulario y enviar un email.
// Requisitos: servidor con PHP y función mail habilitada.
// En producción reemplaza con un sistema robusto (SMTP, servicios externos, validación).

if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    http_response_code(405);
    echo "Método no permitido";
    exit;
}

// Honeypot
if(!empty($_POST['website'])){
    // posible spam
    http_response_code(400);
    echo "Spam detectado";
    exit;
}

$name = isset($_POST['name']) ? strip_tags($_POST['name']) : 'No proporcionado';
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : null;
$message = isset($_POST['message']) ? strip_tags($_POST['message']) : '';

$to = 'info@tudominio.com'; // <<--- Cambia esto por tu email real
$subject = "Contacto web: " . $name;
$body = "Nombre: $name\nEmail: $email\n\nMensaje:\n$message\n";
$headers = "From: no-reply@tudominio.com\r\nReply-To: $email\r\n";

$sent = mail($to, $subject, $body, $headers);
if($sent){
    http_response_code(200);
    echo "OK";
} else {
    http_response_code(500);
    echo "Error al enviar el correo. Comprueba la configuración del servidor.";
}
?>
