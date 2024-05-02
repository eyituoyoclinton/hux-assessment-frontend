import { AppAlertData } from "../store/storeslice/alert-slice";
import { useBoundStore } from "../store/useStore";
import {
  ObjectPayload,
  SendRequestInput,
  SendRequestOutput,
} from "../typings/general";
import { toast } from "react-toastify";

export default class helpers {
  constructor() {}

  static get24HourTo12Hours = (timeString: string) => {
    if (!timeString) return;
    var timeOnly = timeString.indexOf("T")
      ? timeString.slice(
          timeString.indexOf("T") + 1,
          timeString.indexOf("T") + 9
        )
      : "";
    var hourEnd = parseInt(timeOnly.slice(0, 2));
    var ampm = hourEnd < 12 || hourEnd === 24 ? "am" : "pm";
    return `${String(hourEnd % 12 || 12).padStart(2, "0")}:${timeOnly.slice(
      3,
      5
    )}${ampm}`;
  };
  static async showToast(
    myType: "info" | "success" | "warning" | "error" | "default" | "loading",
    message: string
  ) {
    if (myType !== "loading") {
      toast.dismiss();
      await helpers.takeASleep(500);
      toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        type: myType as any,
        theme: "light",
      });
    } else {
      toast.loading(message, { theme: "dark" });
    }
  }
  static takeASleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  static showErrorMessage(data: any) {
    helpers.showToast(
      "error",
      data?.data?.message || "An error occured please try again"
    );
  }

  static generateChartNumber(data: ObjectPayload[]) {
    let myArray = [];
    for (let i = 1; i < 31; i++) {
      myArray.push({ day: i, value: 0 });
    }

    if (data && data.length) {
      for (let j of data) {
        let pos = myArray.findIndex((e) => e.day === j._id.day);
        if (pos === -1) continue;
        myArray[pos].value = j.total;
      }
    }
    return myArray.map((e) => e.value);
  }
  static generateChartDays(data: ObjectPayload[]) {
    let myArray = [];
    for (let i = 0; i < 6; i++) {
      myArray.push({ day: i, value: 0 });
    }

    if (data && data.length) {
      for (let j of data) {
        let pos = myArray.findIndex((e) => e.day === j.day);
        if (pos === -1) continue;
        myArray[pos].value = j.total;
      }
    }
    return myArray.map((e) => e.value);
  }

  static getCurrentMonth = () => {
    const monthDefine = new Date();
    let month = monthDefine.getMonth() + 1;
    let yearD = monthDefine.getFullYear();
    return {
      month: month > 9 ? month : "0" + month,
      year: yearD,
    };
  };

  static timeoutRequest = ({
    ms,
    promise,
  }: {
    ms: number;
    promise: Promise<any>;
  }): Promise<any> => {
    let returnResult = false;
    return new Promise((resolve, reject) => {
      //create a timeout
      let timeoutId = setTimeout(() => {
        // console.log("request time up")
        reject(new Error("promise timeout"));
      }, ms);
      // when the promise resolves
      promise
        .then((res?: any) => {
          clearTimeout(timeoutId);
          //if the request resolve within the time range
          if (returnResult === false) {
            resolve(res);
          }
        })
        .catch((e?: any) => {
          //when the promise reject throw error
          returnResult = true;
          clearTimeout(timeoutId);
          reject(e);
        });
    });
  };

  static async sendRequest(
    config: SendRequestInput
  ): Promise<SendRequestOutput> {
    let headers = new Headers();
    let token = useBoundStore.getState()?.userData?.token;
    headers.append("Authorization", `Bearer ${config.token || token || ""}`);
    //if there's json
    if (config.json) {
      headers.append("Content-Type", "application/json");
    } else if (config.body) {
      headers.append("Accept", "application/form-data");
    }
    //if it profile upload

    let option = {
      headers: headers,
      method: config.method || "GET",
      body: config.json ? JSON.stringify(config.json) : config.body,
    };
    //send the request and wait for 15secs
    return await this.timeoutRequest({
      ms: 20000,
      promise: fetch(config.url, option),
    })
      .then((res: any) =>
        res.json().then((resData: any) => ({
          status_code: res.status,
          data: resData,
          error: undefined,
        }))
      )
      .catch((error?: any) => ({ status_code: 100, data: undefined, error }));
  }

  static processAPIError(res: any, setAlert: Function) {
    //if the response is not 200
    let getErrorData = res?.data;
    //if there error
    if (getErrorData?.message) {
      setAlert({
        type: "error",
        message: getErrorData?.message,
      } as AppAlertData);
    } else {
      setAlert({
        type: "error",
        message: "Request failed, please try again",
      } as AppAlertData);
    }
  }

  static replaceUnderscore(value: any) {
    return value?.replaceAll("_", " ");
    //  return value;
  }
  static replaceUnderDash(value: any) {
    return value?.replaceAll("-", " ");
    //  return value;
  }

  static toUpperCase(value: string) {
    return value?.charAt(0).toUpperCase() + value.slice(1);
  }

  static formatMoney(value: number | string) {
    if (!value || Number(value).toString() === "NaN") return value;
    return String(value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  static getNairaSign = () => `\u20A6`;
}
