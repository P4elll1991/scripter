import { JetView } from "webix-jet";
import SubjectsConfig from "./subjects-config";
import { Clasters } from "../types/clasters";

export default class DashboardView extends JetView {
  private view: {
    questions_list: webix.ui.list;
  };
  private claster: Clasters;

  public init(): void {
    this.view = {
      questions_list: this.$$("questions_list") as webix.ui.list,
    };
    this.attachEvents();
    this.claster = this.getParam("claster", false);
    console.log(this.claster);
  }

  public attachEvents(): void {
    this.view.questions_list.attachEvent("onItemDblClick", (id: any): void => {
      let item: any = this.view.questions_list.getSelectedItem(true)[0];
      console.log(item);
      this.show(`./scripter?questionId=${id}`);
    });
  }

  public config() {
    return SubjectsConfig();
  }

  public destructor(): void {
    super.destructor();
  }
}
