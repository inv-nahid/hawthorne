import { create } from "zustand"




export const useAuthStore = create(() => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,
}))