import { useState } from "react";
import NicteHá from "src/assets/images/Nicte-Há.jpg";
import fall from "src/assets/images/fall.svg";
import { PinInput } from "src/components/PinInput";
import "./index.scss";

export const YAhoraUnPoema = () => {
  const [isNicte, setIsNicte] = useState(false);
  const handlePin = (e: any) => {
		if (e === "1824") return setIsNicte(true);
  };

  return (
    <div className="container">
      {isNicte ? (
        <>
          <h1>Nicte</h1>
          <div className="poem">
            <p>
              <span className="parragraph1">
                La noche pasa lenta, sin saber y sin querer. <br />
                La luna, farol del cielo acompaña mi desvelo.
              </span>
            </p>
            <p>
              <span className="parragraph2">
                Un hombre que había muerto, <br />
                y que ha vuelto a caminar, <br />
                Dios así lo quiso <br />y le dió oportunidad.
              </span>
            </p>
            <p>
              <span className="parragraph3">
                Un vals, baile de vida, <br />
                danza nueva en brisa fina.
                <br />
                Ella un ángel sin herida, <br />
                él un vago con fatiga.
              </span>
            </p>

            <p>
              <span className="parragraph4">
                Su luz ella comparte, <br />
                candela en la oscuridad, <br />
                ilumina su reflejo, <br />
                le presta su suavidad.
              </span>
            </p>

            <p>
              <span className="parragraph5">
                Él no tiene qué dar, <br />
                casi todo lo ha perdido. <br />
                Lo poco que posee a Dios se lo ha ofrecido.
              </span>
            </p>

            <p>
              <span className="parragraph6">
                Aunque todo está en la mente, <br />
                bailan vals sobre la seda, <br />
                donde él no pertenece, <br />
                por más que lo quisiese. <br />
                Triste rostro, triste canción, <br />
                se va pensando en su ilusión, <br />
                ha observado de tan de cerca <br />
                su dulce corazón.
              </span>
            </p>

            <p>
              <span className="parragraph7">
                Pequeña flor, este mendigo, <br />
                quisiera verte más seguido, <br />
                aunque roto mi cobijo, <br />
                yo quisiera compartirlo, <br />
                y aunque no pudiera repararle, <br />
                pedirle a Dios por tus racimos.
              </span>
            </p>
            <p>
              <span className="parragraph8">
                Quisiera ser también un pequeño retoño fino.
              </span>
            </p>
          </div>
          <div className="post-poem">
            <img className="girl" src={fall} alt="Nicte-Há" />
            <img src={NicteHá} alt="Nicte-Há" />
          </div>
        </>
      ) : (
				<div className="pin-input-wrapper">
					<h1 className="pin-header">Introduce el pin</h1>
					<PinInput onChange={(e: any) => handlePin(e)} />
				</div>
      )}
    </div>
  );
};
