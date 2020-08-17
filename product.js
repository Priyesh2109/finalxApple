//selecting all slides
const slides = document.querySelectorAll('.slide');

// targeting the two buttons here
const next = document.querySelector('#next')

const prev =  document.querySelector('#prev')

const auto = false;
// 

    const intervalTime = 5000;
// determines when to move to next slide
    let slideInterval;

    const nextSlide = () =>{
    // get the curent image
    const current =document.querySelector('.current');

    // i want to move onto the next image

    current.classList.remove('.current');

    // need to check if next image is present if there is add it else go back to the beggining
         if(current.nextElementSibling){
     current.nextElementSibling.classList.add('current')
         }
         else{
             slides[0].classList.add(current);
         }

         setTimeout(()=> current.add.classList.remove('current'))
}


// previous slide function-go back

const previousSlide = () =>{
    // get the curent image
    const current =document.querySelector('.current');

    // i want to move onto the next image

    current.classList.remove('.current');

    // need to check if previous image is present if there is add it else go back to the very last one
         if(current.previousElementSibling){
     current.previousElementSibling.classList.add('current')
         }
         else{
             slides[slides.length-1].classList.add(current);
         }

         setTimeout(()=> current.add.classList.remove('current'))
}


// now to add event listener for the buttons
next.addEventListener('click', e=>{
    nextSlide();
})

prev.addEventListener('click', e=>{
    prevSlide();
})