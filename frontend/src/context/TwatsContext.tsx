import { createContext, PropsWithChildren, useReducer } from "react";
import { ITwat } from "../types";

interface ITwatsState {
  twats: ITwat[];
}

enum TwatsActionType {
  GET_ALL = "SET",
  CREATE = "CREATE",
}

interface ITwatsAction {
  type: TwatsActionType;
  multiple: ITwat[];
  single: ITwat;
}

/**
 * This will be called as `dispatch` function when using context.
 * @param state
 * @param action
 * @returns
 */
export const twatsReducer = (state: ITwatsState, action: ITwatsAction): ITwatsState => {
  switch (action.type) {
    // `SET` action is used to set the full list of twats received from the server
    case "SET":
      return {
        twats: action.multiple,
      };
    // `CREATE` used when we need to add just one new twat to the list
    case "CREATE":
      return {
        twats: [action.single, ...state.twats],
      };
    default:
      return state;
  }
};

export const TwatsContext = createContext({});
export const TwatsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(twatsReducer, { twats: [] });

  return <TwatsContext.Provider value={{ ...state, dispatch }}>{children}</TwatsContext.Provider>;
};
