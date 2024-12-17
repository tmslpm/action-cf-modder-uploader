import * as core from "@actions/core"
import { ActionExtType } from "./action-extension.type";
import { ActionExtension } from "./action-extension";

export function createExtensionFromInput(): ActionExtType {
  return new ActionExtension(
    core.getInput("cf-token"),
    core.getInput("cf-projecid"),
    core.getInput("file-path"),
    core.getInput("cf-context"),
    core.getInput("cf-metadata"),
    core.getInput("axios-agent")
  );
}

export function createExtension(
  curseforgeToken: string,
  curseforgeProjectId: string,
  curseforgeDomainCtx: string,
  curseforgeUploadMetadata: string,
  pathOfSourceToUpload: string,
  axiosAgent: string,
): ActionExtType {
  return new ActionExtension(
    curseforgeToken,
    curseforgeProjectId,
    curseforgeDomainCtx,
    curseforgeUploadMetadata,
    pathOfSourceToUpload,
    axiosAgent,
  );
}
