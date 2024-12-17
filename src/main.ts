import * as core from "@actions/core"
import { uploadToCurseforge } from "./jobs/curseforge-upload.job";
import { validateExtension } from "./jobs/validate-extension.job";
import { createExtensionFromInput } from "./extensions/action-extension.helper";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // prepare ext
    core.debug("step <- prepare action extension");
    const ext = createExtensionFromInput();

    // validate ext
    core.debug("step <- validate action extension");
    validateExtension(ext)

    // run
    core.debug("step <- starting curseforge upload job");
    const result = uploadToCurseforge(ext);

    core.setOutput("file", result);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed("unknown error");
    }
  }
}
