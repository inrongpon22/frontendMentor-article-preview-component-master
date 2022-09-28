const shareBtn = document.querySelector('.share');
const popUp = document.querySelector('.pop-up');
const share = document.querySelector('.share-img');

console.log(share)

shareBtn.addEventListener('click', () =>{
    popUp.classList.toggle('active');
    shareBtn.classList.toggle('active');
    share.classList.toggle('active');
})