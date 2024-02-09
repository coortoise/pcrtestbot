class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
        aReturn.push("Welcome to Curtis' Coffee Club.");
        aReturn.push("What size coffee would you like?");
        return aReturn;
      },
      SIZE: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.RESERVING;
        aReturn.push("How would you like your coffee?");
        aReturn.push("Black or Regular?");
        return aReturn;
      },
      RESERVING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
        } else {
          aReturn.push("Please leave if you are not here to order");
          aReturn.push("Bye bye now")
        }
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }