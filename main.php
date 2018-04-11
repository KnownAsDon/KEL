$username = $_POST["uname"];
$password = $_POST["psw"];
$file = fopen('login_data.txt', 'w+');
ftruncate($file, 0);
$content = $username. PHP_EOL .$password;
fwrite($file , $content);
fclose($file );
die(header("Location: ".$_SERVER["HTTP_REFERER"]));

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$file = fopen('messages_data.txt', 'w+');
ftruncate($file, 0);
$content = $name. PHP_EOL .$email. PHP_EOL .$message;
fwrite($file , $content);
fclose($file );
die(header("Location: ".$_SERVER["HTTP_REFERER"]));