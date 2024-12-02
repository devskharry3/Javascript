function getName(){
    const name = localStorage.getItem('name');

    document.getElementById('output').innerText = name? `Saved name: ${name}` : 'No Name found';
}

function removeName() {
    localStorage.removeItem('name');

    document.getElementById('output').innerText = 'All data cleared';
}