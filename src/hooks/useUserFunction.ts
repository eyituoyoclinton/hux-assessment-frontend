import { useNavigate } from "react-router-dom";
import { AppAlertData } from "../store/storeslice/alert-slice";
import { useStoreSelector } from "../store/useStore";
import APIendPoint from "../utils/apiEndPoints";
import helpers from "../utils/helpers";

export default () => {
  const navigate = useNavigate();
  const {
    setAlert,
    setIsLoading,
    setUserData,
    setContactData,
    setSingleContact,
  } = useStoreSelector([
    "setAlert",
    "setIsLoading",
    "setUserData",
    "setContactData",
    "setSingleContact",
  ]);
  const login = async (username: string, password: string) => {
    if (!username) {
      return setAlert({
        type: "error",
        title: "Missing field",
        message: "Please input a valid email/mobile",
        confirmName: "Ok",
      } as AppAlertData);
    }
    if (!password) {
      return setAlert({
        type: "error",
        title: "Missing field",
        message: "Please input a valid password",
        confirmName: "Ok",
      } as AppAlertData);
    }
    let sendRequest = await helpers
      .sendRequest({
        url: `${APIendPoint.admin.base}/login`,
        method: "POST",
        json: { username: username, password },
      })
      .catch((e) => e);
    if (sendRequest) {
      if (sendRequest.status_code === 201) {
        return;
      } else if (sendRequest.status_code === 200) {
        setUserData(sendRequest.data.data);
        localStorage.setItem("__mtoken", sendRequest.data.data.token);
        navigate("/contact");
      } else {
        return helpers.showErrorMessage(sendRequest);
      }
    }
  };

  const getprofile = async () => {
    let token = localStorage.getItem("__mtoken");
    if (!token) {
      navigate("/");
      return;
    }
    let sendRequest = await helpers
      .sendRequest({
        url: `${APIendPoint.admin.base2}/profile`,
        method: "GET",
        token: token,
      })
      .catch((e) => e);
    if (sendRequest && sendRequest.status_code !== 200) {
      localStorage.removeItem("__mtoken");
      navigate("/");
      return;
    }
    setUserData({ ...sendRequest.data.data, token: token });
  };

  const createAccount = async (
    firstname: string,
    lastname?: string,
    phoneNumber?: string,
    email?: string,
    password?: string,

    onPress?: Function
  ) => {
    if (!firstname) {
      return helpers.showToast("error", "firstname is required");
    }
    if (!lastname) {
      return helpers.showToast("error", "lastname is required");
    }
    if (!email) {
      return helpers.showToast("error", "email is required");
    }
    if (!phoneNumber) {
      return helpers.showToast("error", "mobile is required");
    }
    if (!password) {
      return helpers.showToast("error", "password is required");
    }
    helpers.showToast("loading", "Loading");
    let sendRequest = await helpers
      .sendRequest({
        url: `${APIendPoint.admin.base}/create-account`,
        method: "POST",
        json: {
          firstname: firstname,
          lastname: lastname,
          mobile: phoneNumber,
          email: email,
          password: password,
        },
      })
      .catch((e) => e);
    //  setIsLoading(false);
    if (sendRequest && sendRequest.status_code !== 200) {
      return helpers.showErrorMessage(sendRequest);
    }
    setUserData(sendRequest.data.data);
    localStorage.setItem("__mtoken", sendRequest.data.data.token);
    navigate("/contact");
  };

  const fetchContactList = async (page = 1) => {
    setIsLoading(true);
    let sendRequest = await helpers
      .sendRequest({
        url: `${APIendPoint.contact.getcontact}`,
        method: "GET",
      })
      .catch((e) => e);
    setIsLoading(false);
    if (sendRequest && sendRequest.status_code !== 200) {
      return helpers.showErrorMessage(sendRequest);
    }

    setContactData(sendRequest.data?.data);
  };

  const fetchSingleContact = async (id: string) => {
    setIsLoading(true);

    //  console.log(status);
    let sendRequest = await helpers
      .sendRequest({
        url: `${APIendPoint.contact.getcontact}/${id}`,
        method: "GET",
      })
      .catch((e) => e);
    setIsLoading(false);
    if (sendRequest && sendRequest.status_code !== 200) {
      return helpers.showErrorMessage(sendRequest);
    }
    setSingleContact(sendRequest.data?.data);
  };

  const createContact = async (
    data: {
      firstname: string;
      lastname?: string;
      phoneNumber?: string;
    },
    onPress?: Function
  ) => {
    if (!data?.firstname) {
      return helpers.showToast("error", "firstname is required");
    }
    if (!data?.lastname) {
      return helpers.showToast("error", "lastname is required");
    }
    if (!data?.phoneNumber) {
      return helpers.showToast("error", "mobile is required");
    }
    helpers.showToast("loading", "Loading");
    let sendRequest = await helpers
      .sendRequest({
        url: `${APIendPoint.contact.getcontact}`,
        method: "POST",
        json: {
          firstname: data?.firstname,
          lastname: data?.lastname,
          mobile: data?.phoneNumber,
        },
      })
      .catch((e) => e);
    //  setIsLoading(false);
    if (sendRequest && sendRequest.status_code !== 200) {
      return helpers.showErrorMessage(sendRequest);
    }
    fetchContactList();
    helpers.showToast("success", "Contact was created successful");
    onPress && onPress();
  };
  const updateContact = async (
    data: {
      firstname: string;
      lastname?: string;
      phoneNumber?: string;
    },
    onPress?: Function,
    id?: string
  ) => {
    if (!data?.firstname) {
      return helpers.showToast("error", "first name is required");
    }
    if (!data?.lastname) {
      return helpers.showToast("error", "lastname is required");
    }
    if (!data?.phoneNumber) {
      return helpers.showToast("error", "mobile is required");
    }

    //  return;
    helpers.showToast("loading", "Loading");
    let sendRequest = await helpers
      .sendRequest({
        url: `${APIendPoint.contact.getcontact}/${id}`,
        method: "PATCH",
        json: {
          firstname: data?.firstname,
          lastname: data?.lastname,
          mobile: data?.phoneNumber,
        },
      })
      .catch((e) => e);
    //  setIsLoading(false);
    if (sendRequest && sendRequest.status_code !== 200) {
      return helpers.showErrorMessage(sendRequest);
    }
    fetchContactList();
    helpers.showToast("success", "Contact was updated successful");
    onPress && onPress();
  };
  const deleteContact = async (id?: string, onPress?: Function) => {
    //  return;
    helpers.showToast("loading", "Loading");
    let sendRequest = await helpers
      .sendRequest({
        url: `${APIendPoint.contact.getcontact}/${id}`,
        method: "DELETE",
      })
      .catch((e) => e);
    //  setIsLoading(false);
    if (sendRequest && sendRequest.status_code !== 200) {
      return helpers.showErrorMessage(sendRequest);
    }
    fetchContactList();
    helpers.showToast("success", "Contact was deleted successful");
    onPress && onPress();
  };

  return {
    login,
    getprofile,
    createAccount,
    createContact,
    updateContact,
    deleteContact,
    fetchContactList,
    fetchSingleContact,
  };
};
