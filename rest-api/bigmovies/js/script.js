function show (){
    $("#list-movies").html('');
  $.ajax({
    type: "get",
    url: "http://www.omdbapi.com/",
    dataType: "json",
    data: {
      apikey: "75f971ec",
      s: $("#tombol-input").val(),
    },
    success: function (response) {
      if (response.Response == "True") {

            let movies = response.Search;

            $.each(movies, function (indexInArray, valueOfElement) { 
                 $("#list-movies").append(`
                <div class="col-md-4">
                    <div class="card mb-3 ms-3">
                        <img src="`+ valueOfElement.Poster +`" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">`+ valueOfElement.Title +`</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> Tahun :&nbsp`+ valueOfElement.Year +`</li>
                            <li class="list-group-item"> Type :&nbsp`+ valueOfElement.Type +`</li>
                        </ul>
                        <div class="card-body">
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary see-detail" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ valueOfElement.imdbID +`">About</button>
                            </div>
                        </div>
                    </div>
                </div>
                 `);
            });
        
      } else {
          $("#list-movies").html(`
          <div class="col">
          <h1 class='text-center'>`+response.Error+`</h1>
          </div>
          
          `);
        }
    },
  });
};

$("#tombol-cari").on("click", function () {
    show();
});

$("#tombol-input").on("keyup", function (e) {
    if (e.keyCode === 13) {
        show();
    }
});

$('#list-movies').on('click', '.see-detail', function () {
    $.ajax({
        type: "get",
        url: "http://www.omdbapi.com/",
        dataType: "json",
        data: {
            apikey: "75f971ec",
            i: $(this).data('id'),
        },
        success: function (movie) {
            if (movie.Response == "True") {
                $('.modal-body').html(`
                    <div class="row">
                        <div class="col-md-4">
                            <img src="`+ movie.Poster +`" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                <li class="list-group-item"><b>Released :&nbsp`+ movie.Released +`</b></li>
                                <li class="list-group-item">Genre :&nbsp`+ movie.Genre +`</li>
                                <li class="list-group-item">Language :&nbsp`+ movie.Language +`</li>
                                <li class="list-group-item">Actors :&nbsp`+ movie.Actors +`</li>
                                <li class="list-group-item">imdbRating :&nbsp`+ movie.imdbRating +`</li>
                                <li class="list-group-item">Plot :&nbsp`+ movie.Plot +`</li>
                            </ul>
                        </div>
                    </div>                
                `);
            }
        },
    });
});

// $("#list-movies").html("<h1 class='text-center'>Nyari apaan lu cok</h1>");
{/* <li class="list-group-item"> imbdID :&nbsp`+ valueOfElement.imdbID +`</li> */}