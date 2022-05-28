import { FormEvent, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { UserInfo } from "../interface";

export const SectionAddUser = () => {
    const { setData } = useContext(UserContext);

    const [newUser, setNewUser] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
        id: 0,
    });

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const { nombre, apellido, edad, email } = newUser;
        // Add ID
        if (!nombre && !apellido && !edad && !email) return null;
        const newUserPlusID = {
            ...newUser,
            id: Math.floor(Math.random() * 100000) + 1,
        };
        setData((data: UserInfo[]) => {
            return [...data, newUserPlusID];
        });
    };
    return (
        <>
            <section>
                <fieldset className="fieldset-container">
                    <h1>Agregar Perfiles:</h1>
                    <form className="form-container" onSubmit={handleAddUser}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="nombre">
                                Nombre:
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="nombre"
                                name="nombre"
                                autoComplete="off"
                                value={newUser.nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="apellido">
                                Apellido:
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="apellido"
                                name="apellido"
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={newUser.apellido}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="edad">
                                Edad:
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                id="edad"
                                name="edad"
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={newUser.edad}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={newUser.email}
                            />
                        </div>
                        <button type="submit" className="bttn">
                            Agregar
                        </button>
                    </form>
                </fieldset>
            </section>
        </>
    );
};
