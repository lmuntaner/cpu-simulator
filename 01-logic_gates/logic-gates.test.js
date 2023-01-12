const { Lightbulb } = require("../00-circuit/circuit");
const { Nand } = require("./logic-gates");

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
});
