import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];
  numbers: number[] = [];

  onGameStarted({ counter }: { counter: number }) {
    // if (counter % 2 === 0) {
    //   this.evenNumbers.push(counter);
    // }
    this.numbers.push(counter);
  }
}
