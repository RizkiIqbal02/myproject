function show(){
    $("#list-result").html("");
  $.ajax({
    type: "get",
    url: "https://www.googleapis.com/customsearch/v1?",
    dataType: "json",
    data: {
      key: "AIzaSyDfyf2W2oBZY7VQljtarBQBqY9b7fAhPX4",
      cx: "e52b23912adf4432e",
      q: $("#form-cari").val(),
    },
    success: function (hasil) {
      let ketemu = hasil.searchInformation.totalResults;
      if (ketemu > 0) {
        let items = hasil.items;
        console.log(items);
        $.each(items, function (indexInArray, valueOfElement) {
          $("#list-result").append(`
                    
                    <div class="card mb-3 mt-3 m-1 w-100">
                    <div class="row">
                        <div class="col">
                            <div class="card-body">
                                <p class="card-text"><small class="text-muted">`+ valueOfElement.link +`</p>
                                <a href="`+ valueOfElement.link +`" class="card-title  mb-3 text-md-start text-primary">`+ valueOfElement.htmlTitle +`</a>
                                <p class="card-text">`+valueOfElement.htmlSnippet +`</p>
                            </div>
                        </div>
                    </div>
                </div>
        `);
        });
      } else {
        $("#list-result").html('<h1 class="text-center mt-5">Nyari apaan babi</h1>');
        // console.log(ketemu);
      }
    },
  });
}

$("#tombol-cari").on("click", function () {
  show();
});

$('#form-cari').on('keyup', function (res) {
    
    if (res.keyCode == 13){
        show();
    }
});

// $('#form-cari').on('click','.card-title', function () {
//     $.ajax({
//         type: "get",
//         url: "https://www.googleapis.com/customsearch/v1?",
//         data: {
//             key: "AIzaSyDfyf2W2oBZY7VQljtarBQBqY9b7fAhPX4",
//             cx: "e52b23912adf4432e",
//             q: $("#form-cari").val(),
//           },
//         dataType: "json",
//         success: function (response) {
//             let link = response.items.link;
//             window.location.replace(link);
//         }
//     });
// });