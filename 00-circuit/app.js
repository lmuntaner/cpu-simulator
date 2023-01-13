import { ElectricNode, LightbulbUI, SourceUI, SwitchUI } from "./circuit.js";

/**
 * PROJECT 01
 */
const lightbulb1 = new LightbulbUI();
const source1 = new SourceUI(lightbulb1);

lightbulb1.addElement("#lightbulb-1");
source1.setListener("#start-1");

/**
 * PROJECT 02
 */

const lightbulb1_1 = new LightbulbUI();
const lightbulb1_2 = new LightbulbUI();
const node2 = new ElectricNode([lightbulb1_1, lightbulb1_2]);
const source2 = new SourceUI(node2);

lightbulb1_1.addElement("#lightbulb-2-1");
lightbulb1_2.addElement("#lightbulb-2-2");
source2.setListener("#start-2");

/**
 * PROJECT 03
 */

const lightbulb3 = new LightbulbUI();
const switchNode3 = new SwitchUI(lightbulb3);
const source3 = new SourceUI(switchNode3);

lightbulb3.addElement("#lightbulb-3");
switchNode3.setListener("#switch-3");
source3.setListener("#start-3");