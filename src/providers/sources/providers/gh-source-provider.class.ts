import { SourceProvider } from "../source-provider.class";
import * as fs from "fs";

export class GithubSourceProvider extends SourceProvider {
  public constructor() {
    super();
  }

  public override fetch(endpoint: string): fs.ReadStream {
    // todo implement github api process
    return fs.createReadStream(endpoint);
  }

}
