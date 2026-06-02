<?php
/**
 * Logix Finance — Contact form mail handler for cPanel / BigRock shared hosting.
 *
 * Accepts POST JSON from the React app's Contact page and sends an email
 * using PHP's built-in mail() (which is supported on every cPanel host).
 *
 * Upload this file to public_html alongside the rest of the build output.
 *
 * BEFORE GOING LIVE: change the $TO_EMAIL value below to your real inbox.
 */

// --------- CONFIGURE THESE TWO LINES ---------
$TO_EMAIL   = "info@logixfinanceandinvestment.com";   // <— change to your real receiving inbox
$FROM_LOCAL = "noreply";                              // becomes noreply@yourdomain.com
// ---------------------------------------------

header("Content-Type: application/json; charset=utf-8");

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method Not Allowed"]);
    exit;
}

// Read JSON body or fall back to standard form post
$raw  = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Pull and sanitise fields
function clean($s) {
    $s = is_string($s) ? trim($s) : "";
    $s = strip_tags($s);
    // Remove header-injection attempts
    $s = preg_replace('/[\r\n]+/', " ", $s);
    return $s;
}

$name    = clean($data["name"]    ?? "");
$mobile  = clean($data["mobile"]  ?? "");
$email   = clean($data["email"]   ?? "");
$city    = clean($data["city"]    ?? "");
$subject = clean($data["subject"] ?? "General Enquiry");
$message = trim((string)($data["message"] ?? ""));
$message = strip_tags($message);

// Basic validation
$errors = [];
if ($name === "")                          $errors[] = "Name is required.";
if ($mobile === "")                        $errors[] = "Mobile is required.";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "A valid email is required.";
if ($city === "")                          $errors[] = "City is required.";
if ($message === "")                       $errors[] = "Message is required.";

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(["ok" => false, "errors" => $errors]);
    exit;
}

// Build the email
$site_host  = $_SERVER["HTTP_HOST"] ?? "logixfinance";
$from_email = $FROM_LOCAL . "@" . preg_replace('/^www\./', "", $site_host);

$mail_subject = "[Website Enquiry] " . $subject . " — " . $name;

$body  = "A new enquiry has been submitted from the Logix Finance website.\n";
$body .= "==========================================================\n\n";
$body .= "Name    : " . $name    . "\n";
$body .= "Mobile  : " . $mobile  . "\n";
$body .= "Email   : " . $email   . "\n";
$body .= "City    : " . $city    . "\n";
$body .= "Subject : " . $subject . "\n";
$body .= "\nMessage:\n" . $message . "\n\n";
$body .= "----------------------------------------------------------\n";
$body .= "Submitted at : " . date("d M Y, H:i:s") . " (server time)\n";
$body .= "IP           : " . ($_SERVER["REMOTE_ADDR"] ?? "n/a") . "\n";
$body .= "User-Agent   : " . ($_SERVER["HTTP_USER_AGENT"] ?? "n/a") . "\n";

$headers  = "From: Logix Finance Website <" . $from_email . ">\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($TO_EMAIL, $mail_subject, $body, $headers);

if ($sent) {
    echo json_encode(["ok" => true, "message" => "Your enquiry has been received. We'll get back to you shortly."]);
} else {
    http_response_code(500);
    echo json_encode([
        "ok"    => false,
        "error" => "Mail server could not send the email. Please contact us by phone or email instead."
    ]);
}
