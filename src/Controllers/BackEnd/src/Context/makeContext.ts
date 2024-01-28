declare namespace Context {
  export interface IContext {
    clientName: string | "WEB_REMIX";
    clientVersion: string | "0.1";
    videoId?: string;
    extraData?: any;
  }
  export interface Response {
    context: {
      capabilities?: {};
      client: {
        clientName: string;
        clientVersion: string;
      };
    };
  }
}
export function makeContext(context: Context.IContext): Context.Response {
  const { ...props } = context;

  return {
    context: {
      capabilities: {},
      client: {
        clientName: props.clientName,
        clientVersion: props.clientVersion,
      },
    },
  };
}
