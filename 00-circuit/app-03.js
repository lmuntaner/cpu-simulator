const lightbulb = new LightbulbUI();
const switchNode = new SwitchUI(lightbulb);
const source = new SourceUI(switchNode);

lightbulb.addElement("#lightbulb");
switchNode.setListener("#switch");
source.setListener("#start");

