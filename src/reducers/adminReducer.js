const initialData = {
    userId:"",
    college_id:""
};

export const adminReducer = (state = initialData, action) => {
  switch (action.type) {
    case "USER_ID":
      return (state.userId = action.payload);
    case "COLLEGE_ID":
        return (state.college_id = action.payload);
    default:
      return state;
  }
};
