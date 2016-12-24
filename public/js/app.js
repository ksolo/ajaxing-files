$(function() {
  $('form').submit(function(event) {
    var pdf, pdfInputNode, reader;

    event.preventDefault();

    pdfInputNode = $(this).find('input[type=file]')[0];
    pdf = pdfInputNode.files[0];
    reader = new FileReader();

    reader.onload = function(event){
      $.ajax({
        url: '/',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({"pdf": "data:application/pdf;base64 " + btoa(event.target.result)})
      })
    }
    reader.readAsBinaryString(pdf)
  })
})
