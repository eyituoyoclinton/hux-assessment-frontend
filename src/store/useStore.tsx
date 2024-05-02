import { StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ObjectPayload } from "../typings/general";
import { UserSliceState, userStoreSlice } from "./storeslice/user-slice";
import { AlertSliceState, alertStoreSlice } from "./storeslice/alert-slice";

type StoreState = UserSliceState &
   AlertSliceState
export type StoreStateCreator<MyState> = StateCreator<
   MyState,
   [["zustand/immer", never], never],
   [],
   MyState
>;

export const useBoundStore = create<StoreState>()(
   immer<StoreState>((...a) => ({
      ...userStoreSlice(...a),
      ...alertStoreSlice(...a)
   }))
);

export const useStoreSelector = (selector: Array<keyof StoreState>) => {
   return useBoundStore((store) =>
      selector.reduce(
         (acc, el) => ({ ...acc, [el]: store[el] }),
         {} as ObjectPayload
      )
   );
};
