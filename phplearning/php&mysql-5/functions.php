<?php 
$conn = mysqli_connect("localhost", "root", "kr4k3n221", "phpdasar");

function query($query) {
	global $conn;
	$result = mysqli_query($conn, $query);
	$rows = [];
	while ($row = mysqli_fetch_assoc ($result)) {
		$rows[] = $row;
	}
	return $rows;
}


function tambah($data){
	global $conn;
	$nrp = htmlspecialchars($data["nrp"]);
	$nama = htmlspecialchars($data["nama"]);
	$email = htmlspecialchars($data["email"]);
	$jurusan = htmlspecialchars($data["jurusan"]);
	// upload gambar
	$gambar = upload();
	if (!$gambar) {
		return false;
	}


	$query = "INSERT INTO mahasiswa (nama, nrp, email, jurusan, gambar) VALUES ('$nama', '$nrp', '$email', '$jurusan', '$gambar')";
	mysqli_query($conn, $query);

	return mysqli_affected_rows($conn);
}



function upload(){
	$namaFile = $_FILES['gambar']['name'];
	$ukuranFile = $_FILES['gambar']['size'];
	$error = $_FILES['gambar']['error'];
	$tmpName = $_FILES['gambar']['tmp_name'];
	// var_dump($_FILES['gambar']); die();

	if ($error === 4) {
		echo "
			<script>
				alert('silahkan pilih gambar');
			</script>
		";
		return false;
	}


	//cek apakah user upload virus

	$ekstensiGambarValid = ["jpg", "jpeg", "png"];
	$ekstensiGambar = explode(".", $namaFile);
	$ekstensiGambar = strtolower(end($ekstensiGambar));
	if ( !in_array($ekstensiGambar, $ekstensiGambarValid)) {
		echo "<script>
		alert('anda tidak meng upload gambar')
		</script>";
		return false;
	}



	// cek ukuran gambar
	if ($ukuranFile > 1000000) {
		echo "<script>
		alert('file terlalu gede maksimal 1MB lah')
		</script>";
		return false;
	}

	// sudah memenuhi syarat lanjut upload

	$namaFileBaru = uniqid();
	$namaFileBaru .= ".";
	$namaFileBaru .= $ekstensiGambar;

	move_uploaded_file($_FILES['gambar']['tmp_name'] , 'img/'. $namaFileBaru);


	return $namaFileBaru;

}



function hapus($id){
	global $conn;
	mysqli_query($conn, "DELETE FROM mahasiswa WHERE id = $id");

	return mysqli_affected_rows($conn);
}



function ubah($data){
	global $conn;
	$id = htmlspecialchars($data["id"]);
	$nrp = htmlspecialchars($data["nrp"]);
	$nama = htmlspecialchars($data["nama"]);
	$email = htmlspecialchars($data["email"]);
	$jurusan = htmlspecialchars($data["jurusan"]);
	$gambarLama = htmlspecialchars($data["gambarLama"]);

	if ($_FILES['gambar']['error'] === 4) {
		$gambar = $gambarLama;
	} else {
		$gambar = upload();
	}

	$query = "UPDATE mahasiswa SET nama='$nama', nrp= '$nrp', email ='$email', jurusan = '$jurusan', gambar = '$gambar' WHERE id = '$id'";
	mysqli_query($conn, $query);

	return mysqli_affected_rows($conn);
}



function cari ($keyword){
	$query = "SELECT * FROM mahasiswa WHERE nama LIKE '%$keyword%' OR nrp LIKE '%$keyword%' OR email LIKE '%$keyword%' OR jurusan LIKE '%$keyword%'";
	return query($query);
}



?>