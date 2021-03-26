import { createContext, useState } from "react";

interface IState {
  invites: Array<any>;
}

interface IContextProps {
  state: IState;
  dispatch: (state: any) => void;
}

const initialState = {
  invites: [],
};

export const StateContext = createContext<IContextProps>({
  dispatch: () => {},
  state: initialState,
});

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useState<IState>(initialState);
  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
