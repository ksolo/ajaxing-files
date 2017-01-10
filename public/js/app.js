$(function() {
  $('form').submit(function(event) {
    var pdf, pdfInputNode, reader;

    event.preventDefault();

    pdfInputNode = $(this).find('input[type=file]')[0];
    pdf = pdfInputNode.files[0];
    reader = new FileReader();

    reader.onload = function(event){
      var encodedFile = btoa(event.target.result)

      console.log(encodedFile)

      $.ajax({
        url: '/',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({"pdf": "data:application/pdf " + encodedFile })
      })
    }
    
    reader.readAsBinaryString(pdf)
  })
})
