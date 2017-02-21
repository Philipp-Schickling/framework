<?php

	print_r( ( $_GET['request'] ) );

	echo htmlspecialchars("<script>alert('hallo')</script>");

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>

	<link rel="stylesheet" type="text/css" href="<?php echo __DIR__ ?>/test.css">

</head>
<body>

<a href="">Testlink</a>

</body>
</html>