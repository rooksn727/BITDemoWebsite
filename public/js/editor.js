const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change',() => {
    uploadImage(bannerImage, "banner");
} )
  
const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    // makes sure were only uploading images
    if (file && file.type.includes("image")) {
        // create formdata before making request
        const formdata = new FormData();
        formdata.append('image', file);

        // post request to '/uploads route to using fetch method
        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data => {
            // once you get image url set banners background image
            bannerPath = '${location.origin]/${data}';
            banner.style.backgroundImage = 'url("${bannerPath}")';
        })
    }
}