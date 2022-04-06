import React, { useReducer } from "react";
export const commentContext = React.createContext();
const INIT_STATE = {
  comment: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action) {
  }
};
const CommentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return (
    <div>
      <commentContext.Provider value={{}}>{children}</commentContext.Provider>
    </div>
  );
};

export default CommentContextProvider;
