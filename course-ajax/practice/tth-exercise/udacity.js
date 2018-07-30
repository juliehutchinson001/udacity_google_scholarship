const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID <your-client-id>');
unsplashRequest.send();

function addImage(){
}