import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<{
    counter: number;
  }>();
  counter: number = 1;

  intervalId!: ReturnType<typeof setInterval>;

  constructor() {}

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.gameStarted.emit({
        counter: this.counter++,
      });
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalId);
  }
}
