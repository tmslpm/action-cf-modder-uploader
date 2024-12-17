import { ActionExtension } from "src/extensions/action-extension";
import fs from "fs";
import * as core from "@actions/core"

export async function validateExtension(ext: ActionExtension): Promise<void> {

  if (!fs.existsSync(ext.pathOfSourceToUpload)) {
    core.setFailed(`not found file ${ext.pathOfSourceToUpload}`);
  }

}
