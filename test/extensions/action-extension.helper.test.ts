import * as core from "@actions/core";
import { ActionExtension } from "../../src/extensions/action-extension.class"; // Ajustez le chemin si nécessaire
import { createExtension, createExtensionFromInput } from "../../src/extensions/action-extension.helpers";
import { ActionExtType } from "../../src/extensions/action-extension.type";

jest.mock("@actions/core");

describe("test: action-extension helper", () => {

  it("should create ActionExtension with given parameters", () => {
    const result: ActionExtType = createExtension(
      "mockToken",
      "mockProjectId",
      "mockDomainCtx",
      "mockMetadata",
      "mockPath",
      "mockAxiosAgent"
    );

    expect(result).toBeInstanceOf(ActionExtension);
    expect(result.curseforgeToken).toBe("mockToken");
    expect(result.curseforgeProjectId).toBe("mockProjectId");
    expect(result.curseforgeDomainCtx).toBe("mockDomainCtx");
    expect(result.curseforgeUploadMetadata).toBe("mockMetadata");
    expect(result.pathOfSourceToUpload).toBe("mockPath");
    expect(result.axiosAgent).toBe("mockAxiosAgent");
  });

  it("should create ActionExtension from core inputs", () => {
    (core.getInput as jest.Mock).mockImplementation((inputName: string) => {
      const inputs: Record<string, string> = {
        "curseforge-token": "mockToken",
        "curseforge-projec-id": "mockProjectId",
        "curseforge-domain-ctx": "mockDomainCtx",
        "curseforge-metadata": "mockMetadata",
        "target-or-path-to-upload": "mockPath",
        "axios-agent": "mockAxiosAgent"
      };
      return inputs[inputName];
    });

    const result: ActionExtType = createExtensionFromInput();
    expect(result).toBeInstanceOf(ActionExtension);
    expect(result.curseforgeToken).toBe("mockToken");
    expect(result.curseforgeProjectId).toBe("mockProjectId");
    expect(result.curseforgeDomainCtx).toBe("mockDomainCtx");
    expect(result.curseforgeUploadMetadata).toBe("mockMetadata");
    expect(result.pathOfSourceToUpload).toBe("mockPath");
    expect(result.axiosAgent).toBe("mockAxiosAgent");
  });
});
