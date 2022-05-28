import { useContext } from "react";
import UserContext from "../context/UserContext";

const Card = ({ item }: any) => {
    return (
        <div key={item.nombre + item.id} className="card">
            <h2 className="card__title">
                {item.nombre} {item.apellido} - {item.edad} años
            </h2>
            <h4 className="card__subtitle">{item.email}</h4>
        </div>
    );
};

export const SectionShowUser = () => {
    const { data } = useContext(UserContext);

    return (
        <>
            <section>
                <h1>Perfiles disponibles:</h1>
                <br />
                <div className="cards-container">
                    {data?.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
            </section>
        </>
    );
};
