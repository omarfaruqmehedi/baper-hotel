// step 1 add click event handler
document.getElementById('btn-submit').addEventListener('click', function () {
    // get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailaddress = document.getElementById('user-email')
    const email = emailaddress.value
    // step 3 set a password
    // 3.a: set id on the html elements
    // 3.b: get the element 
    // 3.c: get the value from the element
    const passwordid = document.getElementById('user-password')
    const password = passwordid.value
    // verify email and password
    if (email === 'baperbank@gmail.com' && password === 'secret') {
        window.location.href = 'js/bank.html';
    }
    else {
        alert('kulangar password thick moto de')
    }
})