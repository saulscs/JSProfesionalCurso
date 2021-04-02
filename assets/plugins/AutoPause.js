class AutoPause{
     constructor(){
          this.threshold = 0.25;
          this.handlerIntersection = this.handlerIntersection.bind(this);
          this.hadleVisivilityChange = this.hadleVisivilityChange.bind(this);

     }
     run(player){
          this.player = player;
          const observer = new IntersectionObserver(this.handlerIntersection, {
               threshold: this.threshold
          });
          observer.observe(this.player.media);

          document.addEventListener("visibilitychange", this.hadleVisivilityChange);
     }

     handlerIntersection(entreis){
          const entry = entreis[0];

          const isVisible = entry.intersectionRadio >= this.threshold;

          if(isVisible){
               this.player.play();
          } else {
               this.player.pause();
          }
     }

     hadleVisivilityChange(){
          const isVisible = document.visibilityState === "visible"
          if(isVisible){
               this.player.play()
          } else {
               this.player.pause()
          }
      }
}

export default AutoPause;