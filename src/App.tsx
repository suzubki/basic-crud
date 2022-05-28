import { FC } from "react";
import { SectionAddUser } from "./components/SectionAddUser";
import { SectionDeleteUser } from "./components/SectionDeleteUser";
import { SectionShowUser } from "./components/SectionShowUser";
import { SectionUpdateUser } from "./components/SectionUpdateUser";
import "./index.css";

const App: FC = () => {
    return (
        <div className="container">
            <SectionShowUser />
            <SectionAddUser />
            <SectionUpdateUser />
            <SectionDeleteUser />
        </div>
    );
};

export default App;
