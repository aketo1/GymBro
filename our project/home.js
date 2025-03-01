document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('sidebar').style.left = '0';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sidebar').style.left = '-250px';
});