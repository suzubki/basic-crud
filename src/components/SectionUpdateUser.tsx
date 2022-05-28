import { ChangeEvent, FormEvent, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { UserInfo } from "../interface";

export const SectionUpdateUser = () => {
    const { data, setData } = useContext(UserContext);

    const [newUser, setNewUser] = useState({
        nombre: "",
        apellido: "",
        edad: 0,
        email: "",
        id: 0,
    });

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        data.map(
            (user: UserInfo) =>
                user.id === Number(event.currentTarget.value) &&
                setNewUser(user)
        );
    };

    const handleUpdateUser = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const { nombre, apellido, edad, email, id } = newUser;
        // Add ID
        if (!nombre && !apellido && !edad && !email && id === 0) return null;

        setData(
            data.map((user: UserInfo) => (user.id === id ? newUser : user))
        );
    };

    return (
        <>
            <section>
                <fieldset className="fieldset-container">
                    <h1>
                        Actualizar Perfil(Selecciona un perfil mostrado en la
                        sección "Ver Perfiles")
                    </h1>
                    <select onChange={handleSelect}>
                        {data?.map((user: UserInfo) => (
                            <option value={user.id} key={"option" + user.id}>
                                {`${user.nombre} ${user.apellido}`}
                            </option>
                        ))}
                    </select>
                    <form
                        className="form-container"
                        onSubmit={handleUpdateUser}
                    >
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
