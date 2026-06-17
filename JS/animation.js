// window.addEventListener('scroll' , dikhao);
// function dikhao(){
//     let Reveal= document.querySelectorAll('.reveal');
//     for(let j =0 ; j<Reveal.length ; j++){
//         let winheight = window.innerHeight;
//         let rvltop = Reveal[j].getBoundingClientRect().top;
//         let points = 100;
//         if (rvltop<winheight-points) {
//             Reveal[j].classList.add('active')
//         }
//         else{
//             Reveal[j].classList.remove('active')
//         }
//     }
// }
// dikhao()
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {});

// YOU NEED THIS PART:
const sections = document.querySelectorAll('.reveal');
sections.forEach((section) => {
  observer.observe(section); // Tell observer to watch each section
});
//* intersectionObserver js ka aik constructor hay ye aik call back or options leta hy ye tb run karey ga jb aik element view port me aey ga or jb  us sy nikly ga . entries wo elemenst le raha hy jin pr lagani hay . wo hm nay neechy deein haain 