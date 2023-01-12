import { LightbulbUI, SourceUI } from "./circuit.js";

const lightbulb = new LightbulbUI();
const source = new SourceUI(lightbulb);

lightbulb.addElement("#lightbulb");
source.setListener("#start");

