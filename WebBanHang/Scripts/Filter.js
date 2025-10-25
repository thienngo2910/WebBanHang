const iphoneSeriesList = ['iphone17', 'iphone16', 'iphone15', 'iphone14', 'iphone13'];

iphoneSeriesList.forEach(series => {
    const mainCheckbox = document.getElementById(`${series}Main`);
    const subMenu = document.getElementById(`${series}Series`);

    if (mainCheckbox && subMenu) {
        mainCheckbox.addEventListener('change', function () {
            subMenu.style.display = this.checked ? 'block' : 'none';
        });
    }
});