type State = {
  isDark: boolean;
  fSize: number;
};

type Action = {
  type: "TOGGLE" | "INCREASE" | "DECREASE";
};

export const styleReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE":
      return { isDark: !state.isDark, fSize: state.fSize };
    case "INCREASE":
      return { isDark: state.isDark, fSize: state.fSize + 1 };
    case "DECREASE":
      return { isDark: state.isDark, fSize: state.fSize - 1 };
    default:
      return state;
  }
};
