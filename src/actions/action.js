export const login = (collegeId) => ({
    type: "LOGIN",
    payload: collegeId,
  });

export const adminData = (data) =>({
  type: "ADMIN_DATA",
  payload: data
})