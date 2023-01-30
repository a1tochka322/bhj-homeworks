const progress = document.getElementById( 'progress' );
const formData = new FormData(document.getElementById("form"));
const form = document.getElementById('form');

form.addEventListener('input', (e) => {
    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    request.upload.onprogress = (event) => {
        progress.value = event.loaded / event.total;
    }
    request.send(formData);
    e.preventDefault();
});

