import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdleTimeoutService {
  private idle_timer:number = 0;
  private interval_id;

  constructor() {
    //register event listeners for user activity
      window.addEventListener('mousemove', (event) => {
            this.reset();
      });
      window.addEventListener('mouseclick', (event) => {
            this.reset();
      });
      window.addEventListener('keydown', (event) => {
            this.reset();
      });
      window.addEventListener('scroll', (event) => {
            this.reset();
      });
      window.addEventListener('touchstart', (event) => {
            this.reset();
      });
      window.addEventListener('touchmove', (event) => {
            this.reset();
      });

      // start idleTimer
      this.startInterval();

  }
  startInterval(){
    let t = this;
    this.interval_id = setInterval(function(){t.incrementTimer();}, 1000);
  }
  stopInterval(){
    clearInterval(this.interval_id);
  }
  getIdleTimer(){
    return this.idle_timer;
  }
  incrementTimer(){
    if(!this.idle_timer){
      this.idle_timer = 0;
    }

    this.idle_timer = this.idle_timer + 1;
    //console.log(this.idle_timer);
  }
  reset() {
    this.idle_timer = 0;
    //console.log("reset:"+this.idle_timer);
  }

}
