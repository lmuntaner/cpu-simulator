import { ElectricNode, LightbulbUI, SourceUI, SwitchUI } from "../00-circuit/circuit.js";
import { Nand } from "./logic-gates";

const lightbulb1 = new LightbulbUI();
const nand1 = new Nand(lightbulb1);
const switch1 = new SwitchUI(nand1.inputA);
const switch2 = new SwitchUI(nand1.inputB);
const node = new ElectricNode([switch1, switch2]);

const source = new SourceUI(node);

switch1.setListener("#switch-1-1");
switch2.setListener("#switch-1-2");
source.setListener("#start-1");
lightbulb1.addElement("#lightbulb-1");

