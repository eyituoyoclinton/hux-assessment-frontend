import { ObjectPayload } from "../../typings/general";
import { StoreStateCreator } from "../useStore";

export interface UserSliceState {
   userData?: ObjectPayload;
   setUserData?: (value: ObjectPayload) => void;

   contactData?: ObjectPayload;
   setContactData?: (value: ObjectPayload) => void;
   singleContact?: ObjectPayload;
   setSingleContact?: (value: ObjectPayload) => void;
}

export const userStoreSlice: StoreStateCreator<UserSliceState> = (
   set,
   get
) => ({
   userData: {},
   setUserData: (value: ObjectPayload) => set({ userData: value }),

   contactData: [],
   setContactData: (value: ObjectPayload) => set({ contactData: value }),
   singleContact: [],
   setSingleContact: (value: ObjectPayload) => set({ singleContact: value }),
});
