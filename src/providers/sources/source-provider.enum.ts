/**
 * ## Source Provider Enum
 * 
 * Enumeration of available source providers.
 * 
 * This enum is used to define the provider of source content 
 * to be uploaded.
 */
export enum SourceProviderEnum {

  /**
   * ### LOCA
   * 
   * Represents sources that are located on the local file system.
   * 
   * This provider handles local file paths and allows reading files 
   * stored on the machine or server running the application/action.
   */
  LOCAL,

  /**
   * ### GITHUB
   * 
   * Represents sources fetched from a GitHub API.
   * 
   * This provider uses the GitHub API to retrieve artifacts, such 
   * as files attached to releases, branches, or specific files in 
   * the repository. 
   */
  GITHUB

  /* ============================================================
   *         Developer Note: Extending the SourceProvider 
   * ============================================================
   * 
   * To add support for a new source provider, follow these steps:
   * 
   * 1. **Create a New Provider Class**:
   *    - Implement a new class that extends `SourceProvider`, 
   *      for example, `MyProvider`.
   * 
   *    - Ensure the class adheres to the contract defined by the 
   *      `SourceProvider` interface or base class.
   * 
   * -------------
   * 
   * 2. **Update the SourceProviderEnum**:
   *    - Add a new value to the `SourceProviderEnum` to represent 
   *      your new provider, e.g., `MY_PROVIDER`.
   * 
   * -------------
   * 
   * 3. **Update the getProvider Function**:
   *    - Modify the `getProvider()` function to handle the new 
   *      enum value.
   * 
   *    - Ensure it returns an instance of your new provider when 
   *      the corresponding enum value is provided.
   * 
   * -------------
   * 
   * 4. **Implement Tests**:
   *    - Write unit tests to validate the behavior of your new 
   *      provider class.
   * 
   *    - Ensure tests cover edge cases and confirm compatibility 
   *      with the rest of the system.
   * 
   * -------------
   * 
   * 5. **Document the New Provider** (Optional but Recommended):
   *    - Add comments or documentation explaining the purpose and 
   *      usage of the new provider.
   * 
   *    - Include examples where applicable to make integration 
   *      easier for other developers.
   */
}
