window.addEventListener('scroll' , dikhao);
function dikhao(){
    let Reveal= document.querySelectorAll('.reveal');
    for(let j =0 ; j<Reveal.length ; j++){
        let winheight = window.innerHeight;
        let rvltop = Reveal[j].getBoundingClientRect().top;
        let points = 100;
        if (rvltop<winheight-points) {
            Reveal[j].classList.add('active')
        }
        else{
            Reveal[j].classList.remove('active')
        }
    }
}
dikhao()