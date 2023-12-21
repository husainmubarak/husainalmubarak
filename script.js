//Toggle about
function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
         $(target).html("Less Info").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
    
}

//Form submit
 function onFormSubmit(e) {
    e.preventDefault()

    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("Email required")
    } else if (!$(subject).val()) {
        alert("Subject required")
    } else if (!$(message).val()) {
        alert("Message required")
    } else {
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
 }
// ini slideToggle about caraku sendiri
// $(".button").click(function() {
//     if($(this).hasClass("active")) {
//         $(this).html("More Info").removeClass("active")
//     } else {
//         $(this).html("Less Info").addClass("active")
//     }
    
//     const item = $(this).parents(".about-exp-item")
//     const detail = $(item).children(".about-exp-item-detail")
    
//     $(detail).slideToggle()
// })
// akhir slideToggle about caraku sendiri