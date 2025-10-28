import './styles/style.scss'

/*document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > lastScroll && currentScroll > 50) {
            header.classList.add('hide');
        }


        if(lastScroll - currentScroll > 7 && currentScroll > 50){
            setTimeout(()=>{
                header.classList.remove('hide');    
            },500)
        }
        lastScroll = currentScroll;
    });
});
*/

class BlockTracker {
  constructor() {
    this.blocks = document.querySelectorAll('[data-js-block]');
    this.activeBlock = null;
    this.init();
  }

  init() {
    const options = {
      root: null, 
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setActiveBlock(entry.target);
        }
      });
    }, options);

    this.blocks.forEach(block => {
      observer.observe(block);
    });
  }

  setActiveBlock(block) {
    this.blocks.forEach(b => b.classList.remove('active'));
    
    block.classList.add('active');
    this.activeBlock = block;
    console.log(`Активный блок: ${block.id}`);



    if (block.id === "home"){
      let home = document.querySelector('[data-js-header-home]')
      let about = document.querySelector('[data-js-header-about]')

      about.style.fontWeight='normal'

      home.style.fontWeight='600'
    }
    
    if (block.id === "about"){
      let home = document.querySelector('[data-js-header-home]')
      let about = document.querySelector('[data-js-header-about]')

      home.style.fontWeight='normal'

      about.style.fontWeight='600'
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new BlockTracker();
});

