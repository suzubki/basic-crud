import { FormEvent, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { UserInfo } from "../interface";

export const SectionDeleteUser = () => {
    const { setData } = useContext(UserContext);
    const [input, setInput] = useState("");

    const handleDelete = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (input === "") return;

        const nombre = input.toLowerCase();

        setData((data: UserInfo[]) => {
            return data.filter(
                (user: UserInfo) => user.nombre.toLowerCase() !== nombre
            );
        });
    };

    return (
        <section>
            <fieldset className="fieldset-container">
                <h1>Eliminar Perfiles:</h1>
                <br />
                Ingrese el nombre de la persona a eliminar:
                <form className="form-container" onSubmit={handleDelete}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">
                            Nombre:
                        </label>
                        <input
                            className="form-control"
                            id="nombre"
                            type="text"
                            autoComplete="off"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <button className="bttn">Eliminar</button>
                </form>
            </fieldset>
        </section>
    );
};
