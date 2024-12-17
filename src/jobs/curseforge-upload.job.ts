import axios from "axios";
import FormData from "form-data"
import fs from "fs";
import { ActionExtType } from "src/extensions/action-extension.type";

export function computeEndpoint(ext: ActionExtType): string {
  return `https://${ext.curseforgeDomainCtx}.curseforge.com/api/projects/${ext.curseforgeProjectId}/upload-file`;
}

export async function uploadToCurseforge(ext: ActionExtType): Promise<void> {

  const formData = new FormData();
  formData.append("metadata", JSON.stringify(ext.curseforgeUploadMetadata));
  formData.append("file", fs.createReadStream(ext.pathOfSourceToUpload));

  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      "User-Agent": ext.axiosAgent,
      "X-Api-Token": ext.curseforgeToken,
      ...formData.getHeaders()
    }
  };
  const computedEndpoint = computeEndpoint(ext);
  return axios.post(computedEndpoint, formData, headers);
}
