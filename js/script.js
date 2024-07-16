document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('light');

    const menuItems = document.querySelectorAll('ul.menu li a');
    const content = document.getElementById('content');
    const menu = document.getElementById('menu');

    // Show the menu with a transition
    setTimeout(function() {
        menu.classList.add('visible');
    }, 100);

    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            document.body.classList.add('dark');
            document.body.classList.remove('light');

            // Obtener el contenido del data-content del elemento padre
            const parentItem = item.parentElement;
            const details = parentItem.getAttribute('data-content');

            // Actualizar el contenido del div
            content.querySelector('.card-text').textContent = details;
            content.querySelector('.card-title a').textContent = item.textContent;

            // Mostrar el div
            content.classList.add('visible');
        });

        item.addEventListener('mouseout', function() {
            document.body.classList.add('light');
            document.body.classList.remove('dark');

            // Ocultar el div
            content.classList.remove('visible');
        });
    });
});
// document.addEventListener("DOMContentLoaded", function() {
//     document.body.classList.add('light');

//     const menuItems = document.querySelectorAll('ul.menu li a');
//     const content = document.getElementById('content');
//     const marcaje = document.getElementById('marcaje');
//     const menu = document.getElementById('menu');

//     // Show the menu with a transition
//     setTimeout(function() {
//         menu.classList.add('visible');
//     }, 100);

//     menuItems.forEach(function(item) {
//         item.addEventListener('mouseover', function() {
//             document.body.classList.add('dark');
//             document.body.classList.remove('light');
//         });
//         item.addEventListener('mouseout', function() {
//             document.body.classList.add('light');
//             document.body.classList.remove('dark');
//         });
//     });

//     marcaje.addEventListener('mouseover', function() {
//         content.classList.add('visible');
//     });
//     marcaje.addEventListener('mouseout', function() {
//         content.classList.remove('visible');
//     });
// });