import axios from "axios";
import FormData from "form-data";
import { ActionExtType } from "../extensions/action-extension.type";
import { SourceProvider } from "../providers/sources/source-provider.class";
import { SourceProviderEnum } from "../providers/sources/source-provider.enum";
import { GithubSourceProvider } from "../providers/sources/gh-source-provider.class";
import { LocalSourceProvider } from "../providers/sources/local-source-provider.class";

export function computeEndpoint(ext: ActionExtType): string {
  return `https://${ext.curseforgeDomainCtx}.curseforge.com/api/projects/${ext.curseforgeProjectId}/upload-file`;
}

export function getProvider(provider: SourceProviderEnum): SourceProvider {
  switch (provider) {
    // from github api
    case SourceProviderEnum.GITHUB:
      return new GithubSourceProvider();

    // from local
    case SourceProviderEnum.LOCAL:
      return new LocalSourceProvider();
    default:
      return new LocalSourceProvider();
  }
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
