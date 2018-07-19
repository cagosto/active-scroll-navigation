/**
 * ACTIVE_SCROLL - Change acitve navigation item while scrolling
 * config example
 * {
     nav: '.main-nav'
   }
 */
export default class ACTIVE_SCROLL {
  /**
   * constructor
   * @param {Obj} settings - config for class
   */
  constructor(settings) {
    this.nav = document.querySelector(settings.nav);
    this.offSet = settings.offSet || 0;
    this.navItems = this.nav.children;
    this.navArray = Array.from(this.navItems)
    this.activeString = settings.activeClass || 'main-nav__item--active';
    this.setPros();
    this.eventsSroll();
    this.events();
  }
  activeItem = 0
  /**
   * setPros - Set position for when navigation items should change.
   */
  setPros = () => {
    this.pros = [];
    this.navArray.forEach( nav => {
      const id = nav.getAttribute('href');
      const section = document.querySelector(id);
      this.pros.push(section.offsetTop - this.offSet);
    })
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
  /**
   * scrollLocation - check to see if navigation need to be updated
   * @param  {Num} winY - window y position
   * @return {Num} - index of loop match
   */
  scrollLocation = (winY) => {
    let match;
    for (var i = 0; i < this.pros.length; i++) {
      if (i < this.pros.length - 1) {
        let next = this.pros[i + 1];

        if (winY >= (this.pros[i]) && winY < next) {
          return match = i;
        }

      } else if (i === this.pros.length - 1 && winY >= this.pros[i]) {
        return match = i;
      }
    }
  }
  /**
   * checkNav - Scroll event callback
   * @param  {Obj} e - window scroll event object
   */
  checkNav = (e) => {
    const index = this.scrollLocation(window.pageYOffset);

    if(this.activeItem !== index){
      const current = this.activeItem;

      this.activeItem = index;
      this.navItems[current].classList.remove(this.activeString);
      this.navItems[index].classList.add(this.activeString);
    }
  }
}
