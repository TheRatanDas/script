var swalcsslink = document.createElement('link');
swalcsslink.rel = 'stylesheet';
swalcsslink.type = 'text/css';
swalcsslink.href = 'https://www.jquery-az.com/javascript/alert/dist/sweetalert.css';
document.getElementsByTagName('HEAD')[0].appendChild(swalcsslink);




var scriptjs = document.createElement('script');
scriptjs.src = "https://www.jquery-az.com/javascript/alert/dist/sweetalert-dev.js";
document.getElementsByTagName('head')[0].appendChild(scriptjs);




document.getElementsByTagName("body")[0].onload = function() {myloadFunctions()};

function myloadFunctions() {
  swal({   title: "Payment pending!",   
    text: "Please contect to WSN Store",   
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Contect now",   
    cancelButtonText: "Not now",   
    closeOnConfirm: false,   
    closeOnCancel: false }, 
    function(isConfirm){   
        if (isConfirm) 
    {   
        window.open("https://webstartnow.com/contact-us/");   
        } 
        else {     
            swal("Opps!", "After a few days, there may be an error on your website!", "error");   
            } });
}
