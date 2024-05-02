import { StoreStateCreator } from "../useStore";

type AlertType = "success" | "error" | "info";

export interface AppAlertData {
  type: AlertType;
  title: string;
  message: string;
  confirmName?: string;
  cancelName?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export interface AlertSliceState {
  isLoading: boolean;
  setIsLoading?: (value: boolean) => void;
  alert?: AppAlertData;
  setAlert?: (value: AppAlertData) => void;
}

const initState: AlertSliceState = {
  isLoading: false,
};

export const alertStoreSlice: StoreStateCreator<AlertSliceState> = (
  set,
  get
) => ({
  ...initState,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setAlert: (value: AppAlertData) => set({ alert: value, isLoading: false }),
});
