import { SourceProvider } from "../source-provider.class";
import * as fs from "fs";

export class LocalSourceProvider extends SourceProvider {

  public constructor() {
    super();
  }

  public override fetch(path: string): fs.ReadStream {
    LocalSourceProvider.checkIfSourceExist(path);
    return fs.createReadStream(path);
  }

  public static checkIfSourceExist(path: string): void {
    if (!fs.existsSync(path)) {
      throw new Error(`File not found: ${path}. Please check the path.`);
    }
  }

}
