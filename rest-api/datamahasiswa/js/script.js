$.getJSON("data/mahasiswa.json", function (data) {
  let mahasiswa = data.mahasiswa;
  $.each(mahasiswa, function (indexInArray, valueOfElement) {
    $("#daftar-mahasiswa").append('<div class="col-md-4"><div class="card"><div class="row row-cols-1 g-4"><div class="col"><div class="card"><img src="img/'+ valueOfElement.foto +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ valueOfElement.nama +'</h5><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><h5 class="card-title">'+ valueOfElement.alamat_asal +'</h5></div></div></div></div></div></div>');
  });
});
console.log(1)