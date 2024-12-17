import { ActionExtType } from "./action-extension.type";

export class ActionExtension implements ActionExtType {
  private readonly _curseforgeToken: string;
  private readonly _curseforgeProjectId: string;
  private readonly _curseforgeDomainCtx: string;
  private readonly _curseforgeUploadMetadata: string;
  private readonly _pathOfSourceToUpload: string;
  private readonly _axiosAgent: string;

  constructor(
    curseforgeToken: string,
    curseforgeProjectId: string,
    curseforgeDomainCtx: string,
    curseforgeUploadMetadata: string,
    pathOfSourceToUpload: string,
    axiosAgent: string,
  ) {
    this._curseforgeToken = curseforgeToken;
    this._curseforgeProjectId = curseforgeProjectId;
    this._curseforgeDomainCtx = curseforgeDomainCtx;
    this._curseforgeUploadMetadata = curseforgeUploadMetadata;
    this._pathOfSourceToUpload = pathOfSourceToUpload;
    this._axiosAgent = axiosAgent;
  }

  public get curseforgeToken(): string { return this._curseforgeToken }

  public get curseforgeProjectId(): string { return this._curseforgeProjectId }

  public get curseforgeDomainCtx(): string { return this._curseforgeDomainCtx }

  public get curseforgeUploadMetadata(): string { return this._curseforgeUploadMetadata }

  public get pathOfSourceToUpload(): string { return this._pathOfSourceToUpload }

  public get axiosAgent(): string { return this._axiosAgent }

}
