/**
 * Type representing the configuration for the CurseForge content upload action.
 */
export type ActionExtType = {

  /**
   * The authentication token for CurseForge API.
   * Used to authorize the upload request.
   */
  readonly curseforgeToken: string;

  /**
   * The unique identifier of the CurseForge project.
   * 
   * This is used to specify which project the content is being 
   * uploaded to.
   */
  readonly curseforgeProjectId: string;

  /**
   * The domain context of CurseForge API. (`minecraft`, `sims4`)
   */
  readonly curseforgeDomainCtx: string;

  /**
   * Metadata related to the content being uploaded to CurseForge.
   * This could include information like version, changelog, etc.
   * 
   * note: more information on the official curseforge api doc's, 
   *       or see examples
   */
  readonly curseforgeUploadMetadata: string;

  /**
   * The path to the source content on the local filesystem.
   * This file or directory will be uploaded to CurseForge.
   */
  readonly pathOfSourceToUpload: string;

  /**
   * The Axios agent configuration for making the HTTP request.
   * This is used to configure request settings like timeouts, 
   * headers, etc. 
   * 
   * During testing, I encountered issues with Cloudflare blocking 
   * requests. Adding a Axios agent allowed the requests to pass 
   * successfully.
   */
  readonly axiosAgent: string;

}
