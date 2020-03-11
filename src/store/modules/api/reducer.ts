import { ApiExecutable } from "../../middleware/api-executor";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ApiState {
  status: string;
  url: string;
  method: string;
  query: any;
}

const ApiReducer = (
  state: ApiState = { status: "", url: "", method: "", query: "" },
  action: ApiExecutable
) => {
  switch (action.type) {
    case "API/START":
      return {
        status: "start",
        url: action.url,
        query: action.data,
        method: action.method
      };
    case "API/END":
      return { status: "end", url: "", query: "", method: "" };
    default:
      return state;
  }
};

export default ApiReducer;
