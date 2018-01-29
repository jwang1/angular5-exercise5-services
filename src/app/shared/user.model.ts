
export class User {
  constructor(public name = '', public isActive = false) {}

  setStatus(isActive: boolean) {
    this.isActive = isActive;
  }
}
