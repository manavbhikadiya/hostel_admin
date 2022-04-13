const collegeId = "6256c1744b7987339b6f2ab8";
const adminData = {};

export const adminReducer = (state = collegeId, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.payload);
    default:
      return state;
  }
};

export const adminDataReducer = (state = adminData, action) => {
  switch (action.type) {
    case "ADMIN_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};
