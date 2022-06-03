// Подгонка ывсоты фрейма под содержимое
var frame = document.getElementById("Iframe");
frame.onload = function(){
    frame.style.height = frame.contentWindow.document.body.scrollHeight + 'px';
    // frame.style.width = frame.contentWindow.document.body.scrollWidth+'px';
}

// Скрытие бургер-меню после нажатия
let menuItems=document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
for (menuItem of menuItems){
        menuItem.onclick=()=>{
            document.getElementById('button-menu').classList.add('collapsed');
            document.getElementById('button-menu').setAttribute("aria-expanded", "false");
            document.getElementById('navbarSupportedContent').classList.remove('show');
    };
};

