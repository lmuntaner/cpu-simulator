export class Source {
  static ELECTRICAL_INTERVAL_MILLIS = 1000;

  constructor(output) {
    this.output = output;
    this.interval = null;
  }

  start() {
    // Run the first time immediately
    this.output.setSignal(1);
    this.interval = setInterval(() => {
      this.output.setSignal(1);
    }, Source.ELECTRICAL_INTERVAL_MILLIS);
  }

  stop() {
    this.output.setSignal(0);
    clearInterval(this.interval);
    this.interval = null;
  }

  get isStarted() {
    return this.interval !== null;
  }
}

export class Lightbulb {
  constructor() {
    this.signal = 0;
  }

  setSignal(signal) {
    this.signal = signal;
  }
}

export class ElectricNode {
  constructor(outputs) {
    this.signal = 0;
    this.outputs = outputs
  }

  setSignal(signal) {
    this.signal = signal;
    this.outputs.forEach(output => output.setSignal(signal));
  }
}

export class Switch {
  constructor(output) {
    this.output = output;
    this.signal = 0;
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  setSignal(signal) {
    this.signal = signal;
    if (this.isOpen) {
      this.output.setSignal(signal);
    } else {
      this.output.setSignal(0);
    }
  }
}

// Used for UI purposes
export class SourceUI extends Source {
  setListener(selector) {
    this.element = document.querySelector(selector);
    this.element.addEventListener("click", (event) => {
      if (this.isStarted) {
        this.stop();
        event.currentTarget.innerText = "Start";
      } else {
        this.start();
        event.currentTarget.innerText = "Stop";
      }
    });
  }
}

export class LightbulbUI extends Lightbulb {
  setSignal(signal) {
    this.signal = signal;
    if (this.element) {
      if (signal === 1) {
        this.element.classList.add("on");
      } else {
        this.element.classList.remove("on");
      }
    }
  }

  addElement(selector) {
    this.element = document.querySelector(selector);
  }
}

export class SwitchUI extends Switch {
  setListener(selector) {
    this.element = document.querySelector(selector);
    this.element.addEventListener("click", (event) => {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
      event.currentTarget.checked = this.isOpen;
    });
  }
}
