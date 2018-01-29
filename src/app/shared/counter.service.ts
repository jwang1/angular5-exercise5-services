import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activatedCounter = 0;
  deactivatedCounter = 0;

  increaseActivatedCounter(): void {
    this.activatedCounter++;
  }

  increaseDeactivatedCounter(): void {
    this.deactivatedCounter++;
  }

}
