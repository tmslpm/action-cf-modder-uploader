import { ReadStream } from "fs";
import { SourceProvider } from "./source-provider.class";
import fs from "fs";

export class LocalSourceProvider extends SourceProvider {

  public override fetch(path: string): ReadStream {
    return fs.createReadStream(path);
  }

}
