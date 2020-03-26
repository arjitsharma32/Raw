<?php 
/*
Composer handles dependency resolution automatically
As libraries are made on top of each other 
It will download all required libraries for the library we want to use

require_once 'vendor/autoload.php'
*/

require 'vendor/autoload.php';
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'AC06f138a3a457c8d522f8fe67e98efb9c';
$auth_token = '5d384ad4309d6a3a1570a7f25d608182';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+12058465921";

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+918077513705',
    array(
        'from' => $twilio_number,
        'body' => 'Hello Hello ....Testing'
    )
);






?>