class AutoPause {
    constructor(){
        this.threshold = 0.50;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player){
        this.player = player;

        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        })
        observer.observe(player.media)
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    handlerIntersection([media]){
         if (media.isIntersecting){
            this.player.play()
         }else{             
            this.player.pause()
         }
    }
    handleVisibilityChange(){
        const isVisible = document.visibilityState === 'visible';
        if(isVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }
}


export default AutoPause;