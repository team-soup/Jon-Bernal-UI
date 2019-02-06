
class Carousel {
  constructor(el) {
    this.carousel = el;
    this.prevBtn = el.querySelector('.carousel-left');
    this.nextBtn = el.querySelector('.carousel-right');
    this.imgArr = el.getElementsByTagName('img');
    this.index = 0;
    this.picCount = Array.from(this.imgArr).length - 1;
    this.prevBtn.addEventListener('click', ()=>{this.prev()});
    this.nextBtn.addEventListener('click', ()=>{this.next()});
  }
  prev(){
    if(this.index <= 0){
      this.imgArr[this.index].classList.add('hidden');
      this.index = this.picCount;
      this.imgArr[this.index].classList.remove('hidden');
    } else {
      this.imgArr[this.index].classList.add('hidden');
      this.index--;
      this.imgArr[this.index].classList.remove('hidden');
    }
  }
  next(){
    if(this.index >= this.picCount){
      this.imgArr[this.index].classList.add('hidden');
      this.index = 0;
      this.imgArr[this.index].classList.remove('hidden');
    } else {
      this.imgArr[this.index].classList.add('hidden');
      this.index++;
      this.imgArr[this.index].classList.remove('hidden');
        }
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));