
function previewFile() {
  let preview = document.querySelector('.image-preview');
  let file = document.querySelector('input[type=file]').files[0];
  let reader = new FileReader();
    reader.onloadend = function () {
      preview.src = reader.result;
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "./img/завантаження.png";
    }
  }

async function addNews() {
  let title = document.querySelector('#title').value;
  let description = document.querySelector('#text-news').value;
  let image = document.querySelector('.image-preview').src;

  if(title === '' ||
    description === '')
  {
    alert ('title and text are not be empty!' );
  }else if( title.length < 5){
    alert('To short title')
  }else if( description.length < 20) {
    alert('To short text')
  }else {
    let newsItem = {image, title, description};
    console.log(newsItem)
    let news = await fetch('http://localhost:3000/news', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newsItem)
    });
    news = await news.json();
    document.querySelector('.image-preview').src = '/img/завантаження.png';
    document.querySelector('#title').value = '';
    document.querySelector('#text-news').value = '';
    window.location.href = "news.html";  
  }
}
 

