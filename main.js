window.onload = function digital_fn() {

    
    var toggle = document.querySelector('#nav .toggle-btn');
    var collapse = document.querySelector('#nav .collapse');

    toggle.addEventListener('click', function(e) {
        collapse.classList.toggle('active');
    });

    //masonry.js
    var grid = document.querySelector("#site-main .recent-work-area .images-flex");

    var msnry = new Masonry(grid, {
        itemSelector : '.flex-item',
        gutter : 100,
        fitWidth: true,
    });


}

var rellax = new Rellax('.rellax', {
    center: true
});