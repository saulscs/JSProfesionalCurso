import MediaPlayer from "../MediaPlayer";

class AutoPause{
     private threshold:number;
     player: MediaPlayer;

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

    private handlerIntersection(entreis: IntersectionObserverEntry[]){
          const entry = entreis[0];
          const isVisible = entry.intersectionRatio >= this.threshold;

          if(isVisible){
               this.player.play();
          } else {
               this.player.pause();
          }
     }

    private hadleVisivilityChange(){
          const isVisible = document.visibilityState === "visible"
          if(isVisible){
               this.player.play()
          } else {
               this.player.pause()
          }
      }
}

export default AutoPause;