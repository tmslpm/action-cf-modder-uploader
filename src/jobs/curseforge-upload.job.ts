import axios from "axios";
import FormData from "form-data";
import { ActionExtType } from "../extensions/action-extension.type";
import { SourceProviderEnum } from "../providers/sources/source-provider.enum";
import { getProvider } from "../providers/sources/source-provider.helper";

export function computeEndpoint(ext: ActionExtType): string {
  return `https://${ext.curseforgeDomainCtx}.curseforge.com/api/projects/${ext.curseforgeProjectId}/upload-file`;
}

export async function uploadToCurseforge(ext: ActionExtType): Promise<void> {

  // todo implemente provider in action extension
  const sourceProvider = getProvider(SourceProviderEnum.LOCAL);

  const formData = new FormData();
  formData.append("metadata", JSON.stringify(ext.curseforgeUploadMetadata));
  formData.append("file", sourceProvider.fetch(ext.pathOfSourceToUpload));

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
