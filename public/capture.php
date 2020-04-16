<?php
require_once 'stripe-php/init.php'; 
require './keys.php';

\Stripe\Stripe::setApiKey($ApiKey);

//Post comes in json format and needs to be decoded into an object
$data = json_decode(file_get_contents('php://input'), true);
//Verify that all parameters were sent
if (!isset($data['amount']) || !isset($data['currency']) || !isset($data['receipt_email'])) {
  echo "Missing parameters";
} else {
   	if(!isset($data['metadata'])) {
		$data['metadata'] = [];
	}
  
  $paymentIntent = \Stripe\PaymentIntent::create([
	'amount' => $data['amount'],
	'currency' => $data['currency'],
    'receipt_email' => $data['receipt_email'],
	'metadata' => $data['metadata'],
	]);

	$output = [
		'publishableKey' => $publishableKey,
		'clientSecret' => $paymentIntent->client_secret,
	];
  
 	echo json_encode($output);
  
}

?>