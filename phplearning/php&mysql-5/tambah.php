<?php 

require 'functions.php';
if ( isset($_POST["submit"]) ) {
	
	if (tambah($_POST) > 0) {
		echo "
			<script>
				alert('sukses ditambahkan');
				document.location.href = 'index.php';
			</script>
		";
	} else {
		echo "
			<script>
				alert('gagal ditambahkan');
				document.location.href = 'index.php';
			</script>
		";
	}
	
}

// $conn = mysqli_connect("localhost", "root", "kr4k3n221", "phpdasar");

// if ( isset($_POST["submit"]) ) {

// 	$nrp = $_POST["nrp"];
// 	$nama = $_POST["nama"];
// 	$email = $_POST["email"];
// 	$jurusan = $_POST["jurusan"];
// 	$gambar = $_POST["gambar"];


// 	$query = "INSERT INTO mahasiswa (nama, nrp, email, jurusan, gambar) VALUES ('$nama', '$nrp', '$email', '$jurusan', '$gambar')";
// 	mysqli_query($conn, $query);

// }


?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Tambah data mahasiswa</title>
</head>
<body>
	<h1>Tambah data mahasiswa</h1>

	<form action="" method="post" enctype="multipart/form-data">
		<ul>
			<li>
				<label for="nama">Nama :</label>
				<input type="text" name="nama" id="nama" required value="">
			</li>
			<li>
				<label for="nrp">NRP :</label>
				<input type="text" name="nrp" id="nrp" required value="">
			</li>
			<li>
				<label for="email">Email :</label>
				<input type="text" name="email" id="email" required value="">
			</li>
			<li>
				<label for="jurusan">Jurusan :</label>
				<input type="text" name="jurusan" id="jurusan" required value="">
			</li>
			<li>
				<label for="gambar">Gambar :</label>
				<input type="file" name="gambar" id="gambar">
			</li>
			<li>
				<button type="submit" name="submit">Tambah Mahasiswa</button>
			</li>
		</ul>
	</form>
</body>
</html>