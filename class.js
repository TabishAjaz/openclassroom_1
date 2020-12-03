const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');
//for post button
const addPostButton=document.getElementById('add-post');
const articleSection = document.querySelector('section');
//for removing the post
const removePostButton=document.getElementById('remove-post');



// Click event listeners
blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
}); 

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background');
    header.classList.add('green-background', 'text-white');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});


addPostButton.addEventListener('click', ()=> {
  const newPost=createNewPost();
  articleSection.appendChild(newPost);
});


removePostButton.addEventListener('click', ()=> {
  const articleCount=articleSection.childElementCount;
  if(articleCount> 1){
    articleSection.removeChild(articleSection.children[articleCount-1]);
  }
  
  
  
});

//creating new post
function createNewPost(){
  const newArticle=document.createElement('article');
  const newHeading=document.createElement('h5');
  const newParagraph=document.createElement('p');
  
  newHeading.textContent="New Post!";
  newParagraph.textContent="The Original Garden has seen plenty of miracles in the past – and they’re still happening today. Yuko Sato has been enjoying some true Findhorn magic with!"
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newArticle.classList.add('list-group-item');
  return newArticle;
}
