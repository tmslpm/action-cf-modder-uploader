import { ActionExtension } from "../../src/extensions/action-extension.class";

describe("test: action-extension", () => {

  it("should create an instance with the correct values", () => {
    const curseforgeToken = "test-fake-token-qzouhqzoifje";
    const curseforgeProjectId = "test-fake-id-12345";
    const curseforgeDomainCtx = "test-domain";
    const curseforgeUploadMetadata = "{\"key\": \"value\"}";
    const pathOfSourceToUpload = "/path/to/source";
    const axiosAgent = "test-agent";

    const actionExtension = new ActionExtension(
      curseforgeToken,
      curseforgeProjectId,
      curseforgeDomainCtx,
      curseforgeUploadMetadata,
      pathOfSourceToUpload,
      axiosAgent
    );

    expect(actionExtension.curseforgeToken).toBe(curseforgeToken);
    expect(actionExtension.curseforgeProjectId).toBe(curseforgeProjectId);
    expect(actionExtension.curseforgeDomainCtx).toBe(curseforgeDomainCtx);
    expect(actionExtension.curseforgeUploadMetadata).toBe(curseforgeUploadMetadata);
    expect(actionExtension.pathOfSourceToUpload).toBe(pathOfSourceToUpload);
    expect(actionExtension.axiosAgent).toBe(axiosAgent);
  });

});
