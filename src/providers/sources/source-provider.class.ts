import { ReadStream } from "fs";

/**
 * Abstract Base Class: SourceProvider
 * 
 * This class defines the contract for all source providers responsible 
 * for fetching data from different sources (local files, repos, ..). 
 * 
 * It must be extended by concrete implementations that define the 
 * specific behavior for their respective sources.
 */
export abstract class SourceProvider {

  /**
   * Constructor
   * 
   * Initializes the `SourceProvider`. As this is an abstract class, 
   * the constructor does not require parameters or specific logic 
   * but serves as a base for subclasses.
   */
  public constructor() {
    // Initialization logic for the base class (if needed).
  }

  /**
   * Fetch Method
   * 
   * Abstract method that must be implemented by subclasses. 
   * 
   * This method defines how a resource is retrieved from a specific 
   * source. For example:
   * - A local provider may read a file from the filesystem.
   * - A remote provider may download a file from a URL or API.
   * 
   * @param target - A string representing the resource to fetch (e.g., a file path, URL, or identifier).
   * @returns {ReadStream} - A readable stream of the requested resource.
   * 
   * @example
   * ```typescript
   * // usage
   * const provider = new LocalSourceProvider();
   * const stream = provider.fetch("./file.txt");
   * ```
   * 
   * @note This method must be implemented in all concrete subclasses.
   * @see {@link LocalSourceProvider} for an example implementation.
   */
  public abstract fetch(target: string): ReadStream;

}

