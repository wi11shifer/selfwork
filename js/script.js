$(document).ready(function() {
    // Додаємо обробник подій для кожної карти
    $('.card').hover(
        function() {
            // Викликається при наведенні
            $(this).css('opacity', '0.8'); // Змінюємо прозорість на 0.8
        },
        function() {
            // Викликається при відведенні
            $(this).css('opacity', '1'); // Повертаємо прозорість на 1
        }
    );
});