import { createContext, useContext, useState, type ReactNode } from "react";
import { type IAuthResponse, type ILogin, type ISignup, type IUser } from "../interfaces/user";
import AuthService from "../services/authService";


interface AuthContextType {
    user: IUser | null;
    isAuthenticated: boolean;
    login: (userData: ILogin) => Promise<void>;
    logout: () => Promise<void>;
    signup: (userData:ISignup) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const { loginService, logoutService, signupService } = AuthService;

    const [user, setUser] = useState<IUser | null>(null);
    const isAuthenticated = user ? true : false;


    const signup = async (userData: ISignup) => {
        await signupService(userData);
    }

    const login = async (userData: ILogin) => {
        const response: IAuthResponse = await loginService(userData);
        setUser(response.user);
        localStorage.setItem("accessToken", response.token)
    }

    const logout = async () => {
        await logoutService();
        setUser(null);
        localStorage.removeItem("accessToken");
    }


    return <AuthContext.Provider value={{ user, isAuthenticated, login, logout, signup }}>
        {children}
    </AuthContext.Provider>
}


//Auth hook
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}