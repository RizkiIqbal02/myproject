<?php 
//connect to database
$conn = mysqli_connect("localhost", "root", "kr4k3n221", "phpdasar");

//query data from database
$result = mysqli_query($conn, "SELECT * FROM mahasiswa");

//query data mahasiswa from object result
//mysqli_fetch_row() mengembalikan array numerik
// var_dump($mhs[0]);

//mysqli_fetch_assoc() mengembalikan array asosiatif
// var_dump($mhs["jurusan"]);

//mysqli_fetch_array() mengembalikan array dengan fleksibel
//minus nya mengembalikan 2 bentuk array sekaligus
//var_dump($mhs["jurusan"]);
//var_dump($mhs[1]);

//mysqli_fetch_object() mengembalikan object
//var_dump($mhs->nama);

// $mhs = mysqli_fetch_assoc($result);

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
        <?php while ( $row = mysqli_fetch_assoc($result) ) : ?>
        <tr>
            <td><?php echo "$i"; ?></td>
            <td>
                <a href="">ubah</a> |
                <a href="">hapus</a>
            </td>
            <td><img src="img/<?= $row["gambar"] ?>" width="150"></td>
            <td><?= $row["nrp"] ?></td>
            <td><?= $row["nama"] ?></td>
            <td><?= $row["email"] ?></td>
            <td><?= $row["jurusan"] ?></td>
        </tr>
        <?php $i++ ?>
        <?php endwhile; ?>
    </table>
</body>
</html>