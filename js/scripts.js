document.addEventListener('DOMContentLoaded', () => {
    console.log('Willkommen bei GameMods Shop!');

    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    toggleDarkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelector('#hero').classList.toggle('dark-mode');
        document.querySelectorAll('#about, #shop, #contact').forEach(section => {
            section.classList.toggle('dark-mode');
        });
        document.querySelectorAll('form input, form textarea').forEach(input => {
            input.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.mod-item').forEach(item => {
            item.classList.toggle('dark-mode');
        });
    });

    const buyButtons = document.querySelectorAll('.mod-item button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modName = button.parentElement.querySelector('h3').textContent;
            console.log(`Mod gekauft: ${modName}`);
        });
    });
});
