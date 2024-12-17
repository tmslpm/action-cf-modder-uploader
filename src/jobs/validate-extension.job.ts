import fs from "fs";
import * as core from "@actions/core"
import { ActionExtType } from "src/extensions/action-extension.type";

export async function validateExtension(ext: ActionExtType): Promise<void> {

  if (!fs.existsSync(ext.pathOfSourceToUpload)) {
    core.setFailed(`not found file ${ext.pathOfSourceToUpload}`);
  }

}
