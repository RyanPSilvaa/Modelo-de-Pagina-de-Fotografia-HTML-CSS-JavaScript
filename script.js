function uploadPhoto() {
    const uploadphoto = document.getElementById('uploadphoto');
    const photogallery = document.getElementById('photogallery');

    for (let i = 0; i < uploadPhoto.files.length; i++){
        const file = uploadphoto.files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.createElement('div');
            imgElement.classList.add('photo');
            imgElement.innerHTML = `<img src="$(e.target.result)" alt="Foto">`;
            photogallery.appendChild(imgElement);
        }

        reader.readAsDataURL(file);
    }
}