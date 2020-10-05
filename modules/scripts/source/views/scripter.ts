import { JetView } from "webix-jet";
import ScripterConfig from "./scripter-config";

export default class ScripterdView extends JetView {
  private view: {};

  private question_id: string;

  public init(): void {
    this.view = {};
    this.question_id = this.getParam("questionId", false);
    console.log(this.question_id);
    this.attachEvents();
  }

  public attachEvents(): void {}

  public config() {
    return ScripterConfig();
  }

  public destructor(): void {
    super.destructor();
  }
}
