// // Câu 01: Đăng kí User ID > 
// // Yêu cầu 01: Required
// // Yêu cầu 02: Độ dài thuộc [5, 12] 
//     // Cách 01: Ko dùng biểu thức chính qui
//     // Cách 02: Có dùng biểu thức chính qui

// // Lưu ý: Kiểu phần tử Submit có hành động mặc định gửi dữ liệu đi

// let userID = document.getElementById('txtUserID');
// let statusOfUserID = document.getElementById('statusOfUserID')
// // let userID = document.querySelector('#txtUserID')

// userID.addEventListener('focus',function(){
//     // userID.style.backgroundColor = 'yellow'
//     this.style.border = '1px solid red'
// })

// userID.addEventListener('focusout', leaveUserId)

// function leaveUserId(){
//     // Cách 01: Ko dùng gì BTCQ
//     // if(userID.value.length >=5 && userID.value.length <=12){
//     //     statusOfUserID.textContent = 'UserID hợp lệ'
//     //     statusOfUserID.style.color = 'blue'
//     // }else{
//     //     statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//     //     statusOfUserID.style.color = 'red'
//     // }

//     // Cách 02: dùng BTCQ: [1, +duongvocung]
//     var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }
// }

// // userID.onchange = function(){
// //     alert('Bạn vừa thay đổi UserID và thoát khỏi UserID')
// // }

// Cách làm 02: Chỉ xử lý khi nhấp Submit

// function checkUserId(){
//         // Cách 02: dùng BTCQ: [1, +duongvocung]
//     let userID = document.getElementById('txtUserID');
//     let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         return true
//     }
//     return false
// }

// function checkPassword(){
//     let password = document.getElementById('txtPassword');
//     let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
//     if(passwordRegex.test(password.value)){
//         return true
//     }
//     return false
// }
// // Tương tự sẽ có 9 hàm check khác

// let register = document.getElementById('btnRegister')

// register.addEventListener('click', function(e){
//     e.preventDefault()
//     let statusOfUserID = document.getElementById('statusOfUserID')
//     let statusOfPassword = document.getElementById('statusOfPassword')
//     if(checkUserId() == true){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }

//     if(checkPassword() == true){
//         statusOfPassword.textContent = 'Password hợp lệ'
//         statusOfPassword.style.color = 'blue'
//     }else{
//         statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
//         statusOfPassword.style.color = 'red'
//     }
// })

// Cách 03: Sử dụng thư viện jQuery
// Cú pháp jQuery: $(SELECTOR).ACTION()
$(document).ready(function(){

    function checkUserId(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkUserId()){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ')
            $("#statusOfUserID").css('color','red')
        }
    })
}) 
$(document).ready(function(){

    function checkPassword(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let password = $('#txtPassword').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password)){
            return true
        }
        return false
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkPassword()){
            $("#statusOfPassword").text('Pass hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }else{
            $("#statusOfPassword").text('Password không hợp lệ')
            $("#statusOfPassword").css('color','red')
        }
    })
}) 
$(document).ready(function(){

    function checkname(){
        let name = $('#txtname').val();
        let nameRegex = /^[a-zA-Z]{7,12}$/;
        if(nameRegex.test(name)){
            return true
        }
        return false
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkname()){
            $("#statusOfname").text('Tên hợp lệ')
            $("#statusOfname").css('color','blue')
        }else{
            $("#statusOfname").text('Tên không hợp lệ')
            $("#statusOfname").css('color','red')
        }
    })
}) 

$("#btnRegister").click(function(e){
    e.preventDefault();
    if($('div.checkbox.required :checkbox:checked').length == 0){
        $("#statusOfcheckbox").text('Mời chọn ngôn ngữ')
        $("#statusOfcheckbox").css('color','red')
    }})
function checkZipcode(){
        let Zipcode = $('#txtZipcode').val()
        let ZipcodeRegex = /^[0-9]+$/
        if(ZipcodeRegex.test(Zipcode)){
            return true
        }
        return false
    }
function checkEmail(){
        let email = $('#txtEmail').val()
        let EmailRegex = /\S+@\S+.\S+/
        if (EmailRegex.test(email)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
    if(checkZipcode()){
        $("#statusOfZipcode").text('Zipcode hợp lệ')
        $("#statusOfZipcode").css('color','blue')
    }else{
        $("#statusOfZipcode").text('Zipcode không hợp lệ')
        $("#statusOfZipcode").css('color','red')
    }
    if(checkEmail()){
        $("#statusOfEmail").text('Email hợp lệ')
        $("#statusOfEmail").css('color','blue')
    }else{
        $("#statusOfEmail").text('Email không hợp lệ')
        $("#statusOfEmail").css('color','red')
    }})
$("#btnRegister").click(function(e){
        e.preventDefault();
        if($('div.radio.required :radio:checked').length == 0){
            $("#statusOfSex").text('Mời chọn giới tính')
            $("#statusOfSex").css('color','red')
        }})

$("#btnRegister").click(function(e){
    e.preventDefault();
if (document.getElementById("country").value == 'Select'){
    $("#statusofcountry").text('Mời chọn đất nước')
    $("#statusofcountry").css('color','red')
}})