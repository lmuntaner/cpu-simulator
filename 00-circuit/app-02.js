const lightbulb1 = new LightbulbUI();
const lightbulb2 = new LightbulbUI();
const node = new ElectricNode([lightbulb1, lightbulb2]);
const source = new SourceUI(node);

lightbulb1.addElement("#lightbulb-1");
lightbulb2.addElement("#lightbulb-2");
source.setListener("#start");

