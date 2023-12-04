var OpenEye = document.getElementById('eye1')
var CloseEye = document.getElementById('eye2')
var PassWord = document.getElementById('passWord')

function toggleEye(){
    if (PassWord.type === 'password'){
        PassWord.type = 'text';
        OpenEye.style.display ='block';
        CloseEye.style.display = 'none';
        
    }
    else{
        PassWord.type = 'password';
        OpenEye.style.display ='none';
        CloseEye.style.display = 'block';
    }
}

CloseEye.addEventListener('click', toggleEye)
OpenEye.addEventListener('click', toggleEye)