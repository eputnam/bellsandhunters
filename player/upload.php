<?php
//target directory
$target_dir = "mp3/";
//get the target file name
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$fileName = basename($_FILES["fileToUpload"]["name"]);
$songName = str_replace(".mp3", " ", $fileName);
//set uploadOK to true
$uploadOk = 1;
//get file type
$songFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    if($songFileType == "mp3" || "m4a" || "wav") {
        //echo "File is an song - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        //echo "File is not an song.";
        $uploadOk = 0;
    }
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
//    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    //    echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
        $playList = "playlist.xml";
        $line_number = 10;
        //read playlist file into array
        $lines = file($playList, FILE_IGNORE_NEW_LINES);
        $line = $lines[$line_number];
        array_splice($lines, $line_number, 0, "     </track>");
        array_splice($lines, $line_number, 0, "         <location>".$target_file."</location>");
        array_splice($lines, $line_number, 0, "         <title>".$songName."</title>");
        array_splice($lines, $line_number, 0, "     <track>");
        file_put_contents($playList, join("\n", $lines));
    } else {
    //    echo "Sorry, there was an error uploading your file.";
    }
}

header('Location: index.html');
?>
