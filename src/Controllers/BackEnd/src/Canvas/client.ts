import { Protobuf } from "./Protobuf";

const LOGGING: boolean = false;
const log: Function = LOGGING ? console.log : () => {};

class SPClient {
  private spLocations: Promise<any>;
  private spLocationsResolved: any;
  private token?: string;

  constructor() {
    this.spLocations = fetch("https://apresolve.spotify.com/?type=spclient")
      .then((res: Response) => res.json())
      .then((res: any) => res.spclient)
      .catch((err: Error) => {
        log("[Canvas/SPClient] Error while fetching spotify client!");
        log(err);
      });
  }

  /*
   * Helper that auto-initializes
   */
  static async create(token: string): Promise<SPClient> {
    if (!token) {
      throw new Error("Must pass Spotify access token to .create(<token>)");
    }
    const spClient = new SPClient();
    spClient.setToken(token);
    return await spClient.init();
  }

  /*
   * Must be called before any fetch requests! Resolves the server URLs
   */
  async init(): Promise<SPClient> {
    this.spLocationsResolved = await this.spLocations;
    return this;
  }

  /*
   * Retrieve a server URL from the list
   */
  getSpLocation(): string {
    const randArray = (array: any[]): any => {
      return array[Math.floor(Math.random() * array.length)];
    };

    return randArray(this.spLocationsResolved);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token as string;
  }

  /*
   * Send the request as raw binary data so protobuf works properly
   */
  async fetchProtobufAuthRaw(urlExt: string, method: string, body: any) {
    const request = await fetch("https://" + this.getSpLocation() + urlExt, {
      method: method,
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        "Content-Type": "application/x-protobuf",
      },
      body: body,
    });
    const buffer = await request.arrayBuffer();
    return buffer;
  }

  /*
   * Pretty protobuf wrapper
   */
  postCanvasRequest(track: any): Promise<any> {
    return this.fetchProtobufAuthRaw(
      "/canvaz-cache/v0/canvases",
      "POST",
      Protobuf.encodeRequest(track)
    )
      .then((res) => {
        log("[Canvas/SPClient] Request response (raw):");
        log(res);
        return Protobuf.decodeResponse(new Uint8Array(res));
      })
      .then((res: any) => {
        if (
          res === undefined ||
          !res?.canvases ||
          res.canvases?.length === undefined
        ) {
          return { canvases: [] };
        }
        return res;
      });
  }
}

export { SPClient };
