import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginService } from "./authServices";
import { userCredentials } from "./authType";
import { RequestState } from "types/types";

interface AuthState {
  user: RequestState<userCredentials>;
  login: ({ email, password }: userCredentials) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: {
        loading: false,
        status: "idle",
        data: { email: "", password: "" },
      },

      error: null,
      login: ({ email, password }) => {
        set({
          user: {
            loading: true,
            status: "pending",
          },
        });
        try {
          const request = loginService({ email: email, password: password });
          set({
            user: {
              loading: false,
              status: "success",
              data: request,
            },
          });
        } catch (err: any) {
          set({
            user: {
              loading: false,
              status: "error",
            },
          });
        }
      },
      logout: () => {
        set({
          user: {
            loading: false,
            status: "idle",
            data: { email: "", password: "" },
          },
        });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuthStore;
