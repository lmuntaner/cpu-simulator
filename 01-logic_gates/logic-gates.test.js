import { Lightbulb, Switch, ElectricNode } from "../00-circuit/circuit";
import { Nand, Not } from "./logic-gates";

describe("Logic Gates", () => {
  describe("Nand Gate", () => {
    it("should return setSignal 1 when both inputs are 0", () => {
      const lightbulb = new Lightbulb();
      const nand = new Nand(lightbulb);
      nand.inputA.setSignal(0);
      nand.inputB.setSignal(0);
      expect(lightbulb.signal).toBe(1);
    });

    it("should return setSignal 1 when one of the input is 1", () => {
      const lightbulb = new Lightbulb();
      const nand = new Nand(lightbulb);
      nand.inputA.setSignal(1);
      nand.inputB.setSignal(0);
      expect(lightbulb.signal).toBe(1);

      nand.inputA.setSignal(0);
      nand.inputB.setSignal(1);
      expect(lightbulb.signal).toBe(1);
    });

    it("should return setSignal 0 when both inputs are 1", () => {
      const lightbulb = new Lightbulb();
      const nand = new Nand(lightbulb);
      nand.inputA.setSignal(1);
      nand.inputB.setSignal(1);
      expect(lightbulb.signal).toBe(0);
    });
  });

  describe("Nand Gate circuit", () => {
    it("should set lightbulb to ON when both switches are off", () => {
      const lightbulb1 = new Lightbulb();
      const nand1 = new Nand(lightbulb1);
      const switch1 = new Switch(nand1.inputA);
      const switch2 = new Switch(nand1.inputB);
      const node = new ElectricNode([switch1, switch2]);

      node.setSignal(1);
      expect(lightbulb1.signal).toBe(1);
    });

    it("should set lightbulb to ON when only one switch is ON", () => {
      const lightbulb1 = new Lightbulb();
      const nand1 = new Nand(lightbulb1);
      const switch1 = new Switch(nand1.inputA);
      const switch2 = new Switch(nand1.inputB);
      const node = new ElectricNode([switch1, switch2]);

      switch1.open();
      node.setSignal(1);
      expect(lightbulb1.signal).toBe(1);
    });

    it("should set lightbulb to OFF when both switces are ON", () => {
      const lightbulb1 = new Lightbulb();
      const nand1 = new Nand(lightbulb1);
      const switch1 = new Switch(nand1.inputA);
      const switch2 = new Switch(nand1.inputB);
      const node = new ElectricNode([switch1, switch2]);

      switch1.open();
      switch2.open();
      node.setSignal(1);
      expect(lightbulb1.signal).toBe(0);
    });
  });

  describe("Not Gate", () => {
    it("should opposite signal to the one received", () => {
      const lightbulb = new Lightbulb();
      const not = new Not(lightbulb);
      not.input.setSignal(0);
      expect(lightbulb.signal).toBe(1);
      not.input.setSignal(1);
      expect(lightbulb.signal).toBe(0);
    })
  })
});
