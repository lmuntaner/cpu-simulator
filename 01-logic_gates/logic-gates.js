class ElectricalInput {
  constructor(output) {
    this.signal = 0;
    this.output = output;
  }
  setSignal(signal) {
    this.signal = signal;
    this.output.setSignal(signal);
  }
}

class Nand {
  constructor(output) {
    this.output = output;
    this.inputA = new ElectricalInput(this);
    this.inputB = new ElectricalInput(this);
  }

  setSignal(signal) {
    this.output.setSignal(
      this.inputA.signal === 1 && this.inputB.signal === 1 ? 0 : 1
    );
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { Nand };
}