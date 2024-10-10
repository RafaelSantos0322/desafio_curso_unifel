$(document).ready(() => {
    
    $('#btn_responsivo').on('click', () => {
        $('#menu_responsivo').toggleClass('active');
        $('#btn_responsivo').find('i').toggleClass('fa-x');
    })
})