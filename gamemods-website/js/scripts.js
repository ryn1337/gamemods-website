document.addEventListener('DOMContentLoaded', () => {
    console.log('Willkommen bei GameMods Shop!');
    
    const buyButtons = document.querySelectorAll('.mod-item button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modName = button.parentElement.querySelector('h3').textContent;
            console.log(`Mod gekauft: ${modName}`);
        });
    });
});
