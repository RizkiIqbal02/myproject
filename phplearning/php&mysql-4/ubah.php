<?php 

require 'functions.php';

//ambil data id di URL
$id = $_GET["id"];

//memakai funtion query untuk mengambil data mahasiswa
$mhs = query("SELECT * FROM mahasiswa WHERE id = $id")[0];

if ( isset($_POST["submit"]) ) {
	
	if (ubah($_POST) > 0) {
		echo "
			<script>
				alert('sukses diubah');
				document.location.href = 'index.php';
			</script>
		";
	} else {
		echo "
			<script>
				alert('gagal diubah');
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
	<title>Ubah data mahasiswa</title>
</head>
<body>
	<h1>Ubah data mahasiswa</h1>

	<form action="" method="post">
		<ul>
			<input type="hidden" name="id" value="<?= $mhs["id"] ?>">
			<li>
				<label for="nama">Nama :</label>
				<input type="text" name="nama" id="nama" required value="<?= $mhs["nama"] ?>">
			</li>
			<li>
				<label for="nrp">NRP :</label>
				<input type="text" name="nrp" id="nrp" required value="<?= $mhs["nrp"] ?>">
			</li>
			<li>
				<label for="email">Email :</label>
				<input type="text" name="email" id="email" required value="<?= $mhs["email"] ?>">
			</li>
			<li>
				<label for="jurusan">Jurusan :</label>
				<input type="text" name="jurusan" id="jurusan" required value="<?= $mhs["jurusan"] ?>">
			</li>
			<li>
				<label for="gambar">Gambar :</label>
				<input type="text" name="gambar" id="gambar" value="<?= $mhs["gambar"] ?>">
			</li>
			<li>
				<button type="submit" name="submit">Ubah Mahasiswa</button>
			</li>
		</ul>
	</form>
</body>
</html>