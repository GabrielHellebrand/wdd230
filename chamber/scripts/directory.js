const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



document.getElementById('toggle-view-button').addEventListener('click', function () {
    const gridView = document.querySelector('.grid');
    const listView = document.querySelector('.list');

    if (gridView.style.display === '' || gridView.style.display === 'grid') {
        gridView.style.display = 'none';
        listView.style.display = 'grid';
    } else {
        gridView.style.display = 'grid';
        listView.style.display = 'none';
    }
});