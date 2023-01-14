import { ElectricNode } from "../00-circuit/circuit";

export class InputNode {
  constructor(listener) {
    this.listener = listener;
  }
  setSignal(signal) {
    this.listener(signal);
  }
}

export class Nand {
  constructor(output) {
    this.output = output;
    this.inputA = new InputNode(this.setSignalA.bind(this));
    this.inputB = new InputNode(this.setSignalB.bind(this));
    this.inputASignal = null;
    this.inputBSignal = null;
  }

  setSignalA(signal) {
    this.inputASignal = signal;
    this.setSignal();
  }

  setSignalB(signal) {
    this.inputBSignal = signal;
    this.setSignal();
  }

  setSignal() {
    if (this.inputASignal === null || this.inputBSignal === null) {
      return;
    }
    if (this.inputASignal === 1 && this.inputBSignal === 1) {
      // Resetting the signals to null is important
      // Otherwise, for every logic gate, the output would increase in velocity
      // because it would trigger an outpot for any input.
      // This way, we keep the velocity of the electricity constant.
      this.inputASignal = null;
      this.inputBSignal = null;
      this.output.setSignal(0);
    } else {
      this.inputASignal = null;
      this.inputBSignal = null;
      this.output.setSignal(1);
    }
  }
}

export class Not {
  constructor(output) {
    const internalNand = new Nand(output);
    this.input = new ElectricNode([internalNand.inputA, internalNand.inputB]);
  }
}

export class And {
  constructor(output) {
    const internalNot = new Not(output);
    const internalNand = new Nand(internalNot.input);
    this.inputA = internalNand.inputA;
    this.inputB = internalNand.inputB;
  }
}

export class Or {
  constructor(output) {
    const nand = new Nand(output);
    const notA = new Not(nand.inputA);
    const notB = new Not(nand.inputB);
    this.inputA = notA.input;
    this.inputB = notB.input;
  }
}

export class Xor {
  constructor(output) {
    const and = new And(output);
    const nand = new Nand(and.inputA);
    const or = new Or(and.inputB);
    this.inputA = new ElectricNode([nand.inputA, or.inputA]);
    this.inputB = new ElectricNode([nand.inputB, or.inputB]);
  }
}
