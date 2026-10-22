<?php
// Kontaktformular für netcup-Webhosting (PHP mail()).
// Wird im Astro-Dev-Server nicht ausgeführt – nur auf dem Webspace testbar.

declare(strict_types=1);

const RECIPIENT = 'therapierast@gmail.com';
const SENDER = 'kontakt@heidirast.com'; // Absender muss zur Domain gehören (SPF)

function back(string $path): never
{
    header('Location: ' . $path, true, 303);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    back('/kontakt/');
}

// Spam-Falle: echte Besucher lassen dieses Feld leer
if (!empty($_POST['website'])) {
    back('/kontakt/danke/');
}

$clean = static fn(string $key, int $max): string => trim(mb_substr((string)($_POST[$key] ?? ''), 0, $max));

$name = str_replace(["\r", "\n"], ' ', $clean('name', 120));
$email = $clean('email', 200);
$message = $clean('message', 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    back('/kontakt/?fehler=1#kontaktformular');
}

$subject = '=?UTF-8?B?' . base64_encode('Nachricht über heidirast.com von ' . $name) . '?=';
$body = "Name: {$name}\nE-Mail: {$email}\n\n{$message}\n";
$headers = implode("\r\n", [
    'From: Heidi Rast Website <' . SENDER . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

if (!mail(RECIPIENT, $subject, $body, $headers, '-f' . SENDER)) {
    back('/kontakt/?fehler=1#kontaktformular');
}

back('/kontakt/danke/');
