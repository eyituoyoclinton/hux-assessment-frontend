import { ObjectPayload } from "../../typings/general";
import { StoreStateCreator } from "../useStore";

export interface UserSliceState {
   userData?: ObjectPayload;
   setUserData?: (value: ObjectPayload) => void;
}

export const userStoreSlice: StoreStateCreator<UserSliceState> = (
   set,
   get
) => ({
   userData: {},
   setUserData: (value: ObjectPayload) => set({ userData: value }),


});
