import * as core from "@actions/core"
import { ActionExtType } from "./action-extension.type";
import { ActionExtension } from "./action-extension.class";

export function createExtensionFromInput(): ActionExtType {
  return new ActionExtension(
    core.getInput("curseforge-token"),
    core.getInput("curseforge-projec-id"),
    core.getInput("curseforge-domain-ctx"),
    core.getInput("curseforge-metadata"),
    core.getInput("target-or-path-to-upload"),
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
