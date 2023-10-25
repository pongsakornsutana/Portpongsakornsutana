<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // รับข้อมูลจากแบบฟอร์ม
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // นำข้อมูลไปใช้งาน ตัวอย่างเช่น บันทึกลงฐานข้อมูล, ส่งอีเมล์, หรือประมวลผลต่อไปตามที่คุณต้องการ

    // ตัวอย่าง: บันทึกข้อมูลลงไฟล์ text
    $file = fopen("messages.txt", "a");
    fwrite($file, "Name: " . $name . "\n");
    fwrite($file, "Email: " . $email . "\n");
    fwrite($file, "Message: " . $message . "\n\n");
    fclose($file);

    // ตัวอย่าง: ส่งอีเมล์
    // mail("admin@example.com", "New Contact Form Submission", $message, "From:" . $email);

    // นำผู้ใช้ไปยังหน้าขอบคุณหรือหน้าอื่นตามที่คุณต้องการ
    header("Location:");
}
?>
