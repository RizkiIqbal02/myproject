<?php 
//connect to database
require 'functions.php';

$mahasiswa = query("SELECT * FROM mahasiswa");

if (isset($_POST["cari"])) {
    $mahasiswa = cari($_POST["keyword"]);
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Connect PHP & MYSQL</title>
</head>
<body>
    <h1>Daftar mahasiswa</h1>

    <a href="tambah.php">Tambah data mahasiswa</a>
    <br><br>

    <form action="" method="post">
        <input type="text" name="keyword" size="50" autofocus placeholder="masukan pencarian" autocomplete="off">
        <button name="cari" type="submit">cari</button>
    </form>
    <br> <br>
    <table border="1" cellpadding="10" cellspacing="0">

        
        <tr>
            <th>No.</th>
            <th>Aksi</th>
            <th>Gambar</th>
            <th>NRP</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Jurusan</th>
        </tr>

        <?php $i = 1 ?>
        <?php foreach ( $mahasiswa as $row ) : ?>
        <tr>
            <td><?php echo "$i"; ?></td>
            <td>
                <a href="ubah.php?id=<?= $row["id"] ?>">ubah</a> |
                <a href="hapus.php?id=<?= $row["id"] ?>" onclick="return confirm('yakin kids?');">hapus</a>
            </td>
            <td><img src="img/<?= $row["gambar"] ?>" width="150"></td>
            <td><?= $row["nrp"] ?></td>
            <td><?= $row["nama"] ?></td>
            <td><?= $row["email"] ?></td>
            <td><?= $row["jurusan"] ?></td>
        </tr>
        <?php $i++ ?>
        <?php endforeach; ?>
    </table>
</body>
</html>