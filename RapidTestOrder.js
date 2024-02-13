class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
        aReturn.push("Welcome to Curtis' Coffee Club.");
        aReturn.push("How would you like your coffee?");
        aReturn.push("Black or Regular?");
        return aReturn;
      },
    SIZE: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIDE;
        if (sInput.toLowerCase().startsWith('b')) {
          aReturn.push("Alright, so a black coffee.");
          aReturn.push("What size? Small or Large?");
        } else {
          aReturn.push("Alright, so a regular.");
          aReturn.push("What size? Small or Large?")
        }
        return aReturn;
      },
    SIDE: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.RESERVING;
        if (sInput.toLowerCase().startsWith('s')) {
          aReturn.push("Small coffee.");
          aReturn.push("Would you like a donut on the side?");
        } else {
          aReturn.push("Large coffee");
          aReturn.push("Would you like a donut on the side?")
        }
        return aReturn;
      },
      RESERVING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push("Alright so one coffee and one donut.");
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
        } else {
            let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push("Alright so just the one coffee.");
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`)
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