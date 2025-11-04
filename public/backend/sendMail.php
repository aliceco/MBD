<?php
    include_once "devConfig.php";

    $mailContent = $_POST;

    $to = "alicecohen.r@gmail.com";

	// $subject = $mailContent['subject'];
    // $name = $mailContent['name'];
    // $senderMail = $mailContent['email'];

    //  $message = "Från: " . $name . "\n"
    // . "Kontaktas via: " . $senderMail . "\n\n"
    // . "Meddelande:" . "\n" . $mailContent['message'];


    $subject = $mailContent['subject'];
    $comapanyName = $mailContent['companyName'];
    $contactPerson = $mailContent['contactPerson'];
    $senderMail = $mailContent['email'];

    $message = 
    "Från företaget: " . $comapanyName . "\n"
    . "Kontaktperson: " . $contactPerson . "\n\n"
    . "Kontaktas via: " . $senderMail . "\n\n"
    . "Meddelande:" . "\n" . $mailContent['message'];

    $headers = "webb@nlg.medieteknik.com";
	if( mail($to,$subject,$message,$headers) ){
        echo true;
    }
    else{
        throw new Exception('Could not send mail');
    }