import { ActionExtension } from "src/extensions/action-extension";
import axios from "axios";
import FormData from "form-data"
import fs from "fs";

export async function uploadToCurseforge(ext: ActionExtension): Promise<void> {

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

  return axios.post(ext.computedEndpoint, formData, headers);
}
