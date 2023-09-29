import { createContext } from "react";
import { IAuthContext } from "../types/auth";

const AuthContext = createContext<IAuthContext>(undefined);

export default AuthContext;