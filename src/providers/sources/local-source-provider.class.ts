import { SourceProvider } from "./source-provider.class";
import { ReadStream, createReadStream } from "fs";

export class LocalSourceProvider extends SourceProvider {

  public constructor() {
    super();
  }

  public override fetch(path: string): ReadStream {
    return createReadStream(path);
  }

}
