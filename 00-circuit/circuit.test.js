import { Source, Lightbulb, ElectricNode, Switch } from "./circuit";
import {jest} from '@jest/globals';

describe("Source", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
  });
  it("should light up the lightbulb and not change with time", () => {
    const lightbulb = new Lightbulb();
    const source = new Source(lightbulb);

    source.start();
    jest.advanceTimersByTime(Source.ELECTRICAL_INTERVAL_MILLIS);

    expect(lightbulb.signal).toBe(1);

    jest.advanceTimersByTime(Source.ELECTRICAL_INTERVAL_MILLIS);
    expect(lightbulb.signal).toBe(1);

    source.stop();
  });

  describe("ElectricNode", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setInterval');
    });
    it("should forward signal to multiple outputs", () => {
      const lightbulb1 = new Lightbulb();
      const lightbulb2 = new Lightbulb();
      const node = new ElectricNode([lightbulb1, lightbulb2]);
      const source = new Source(node);

      source.start();
      jest.advanceTimersByTime(Source.ELECTRICAL_INTERVAL_MILLIS);

      expect(lightbulb1.signal).toBe(1);
      expect(lightbulb2.signal).toBe(1);

      source.stop();
    });
  });

  describe("Switch", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setInterval');
    });

    it("should open and close lightbulb", () => {
      const lightbulb = new Lightbulb();
      const switchNode = new Switch(lightbulb);
      const source = new Source(switchNode);

      source.start();
      jest.advanceTimersByTime(Source.ELECTRICAL_INTERVAL_MILLIS);

      // Swithc is closed by default
      expect(lightbulb.signal).toBe(0);

      switchNode.open();
      jest.advanceTimersByTime(Source.ELECTRICAL_INTERVAL_MILLIS);

      expect(lightbulb.signal).toBe(1);
      jest.advanceTimersByTime(Source.ELECTRICAL_INTERVAL_MILLIS);
      expect(lightbulb.signal).toBe(1);
      
      switchNode.close();
      jest.advanceTimersByTime(Source.ELECTRICAL_INTERVAL_MILLIS);

      expect(lightbulb.signal).toBe(0);

      source.stop();
    });
  })
});
