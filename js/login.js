document.getElementById('submit-btn').addEventListener('click',function(){
    //get user email
    const userEmail = document.getElementById('user-email');
    const userEmailField = userEmail.value;
   
    //get password
    const userPassword= document.getElementById('user-password');
    const userPassField = userPassword.value;
   
    if (userEmailField == 'solaymanweb27@gmail.com' && userPassField == 1234 ){
        window.location.href ='banking.html';
    }
    
})



