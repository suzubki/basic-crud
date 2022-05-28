import { ReactElement, useEffect, useState } from "react";
import fakeData from "../api/data";
import { UserInfo } from "../interface";
import UserContext from "./UserContext";

interface Props {
    children: ReactElement;
}

export const UserProvider = ({ children }: Props) => {
    const [data, setData] = useState<UserInfo[]>([]);

    useEffect(() => {
        setData(fakeData);
    }, []);

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    );
};
