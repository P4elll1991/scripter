import { JetView } from "webix-jet";
import SubjectsConfig from "./subjects-config";
import { Clasters } from "../types/clasters";

export default class DashboardView extends JetView {
  private view: {};
  private claster: Clasters;

  public init(): void {
    this.view = {};
    this.attachEvents();
    this.claster = this.getParam("claster", false);
    console.log(this.claster);
  }

  public attachEvents(): void {}

  public config() {
    return SubjectsConfig();
  }

  public destructor(): void {
    super.destructor();
  }
}
