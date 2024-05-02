let baseUrl = "http://localhost:3000/api";

const APIendPoint = {
  admin: {
    base: baseUrl + "/auths",
    base2: baseUrl + "/profile",
  },
  contact: {
    getcontact: baseUrl + "/users/contact",
  },
};

export default APIendPoint;
