export default class ACTIVE_SCROLL {
  constructor(settings) {
    this.nav = document.querySelector(settings.nav);
    this.offSet = settings.offSet || 0;
    this.navItems = this.nav.children;
    this.activeString = settings.activeClass || 'main-nav__item--active';
    this.setPros = this.setPros.bind(this)
    this.setPros();
    this.eventsSroll();
    this.events();
  }
  activeItem = 0
  setPros() {
    this.pros = [];
    for (let i = 0; i < this.navItems.length; i++) {
      let id = this.navItems[i].getAttribute('href');
      let section = document.querySelector(id);
      this.pros.push(section.offsetTop - this.offSet);
    }
  }
  eventsSroll() {
    window.addEventListener('scroll', this.checkNav, false);
  }
  events(){
    window.addEventListener('resize', this.setPros, false);
  }
  eventsSrollOff(){
    window.removeEventListener('scroll', this.checkNav, false);
  }
  scrollLocation = (target) => {
    let match;
    for (var i = 0; i < this.pros.length; i++) {
      if (i < this.pros.length - 1) {
        let next = this.pros[i + 1];

        if (target >= (this.pros[i]) && target < next) {
          match = i;
          break;
        }

      } else if (i === this.pros.length - 1 && target >= this.pros[i]) {
        match = i;
      }

    }
    return match;
  }
  checkNav = (e) => {
    let index = this.scrollLocation(window.pageYOffset);
    let current = this.activeItem;
    if(this.activeItem !== index){
      this.activeItem = index;
      this.navItems[current].classList.remove(this.activeString);
      this.navItems[index].classList.add(this.activeString);
    }
  }
}
