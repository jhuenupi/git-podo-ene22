import React, { Component } from "react";
import imgConsejo1 from "../../images/HomePage/Consejos/consejo3_apoyo1.jpg";
import imgConsejo2 from "../../images/HomePage/Consejos/consejo3_apoyo2.jpg";
export default class Consejo3 extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ paddingTop: "0%" }}>
          CUIDADO DEL PIE GERIÁTRICO{" "}
        </h1>
        <div className="valign-wrapper">
          <div className="hide-on-small-only">
            <h6>1.- Higiene diaria en el pie geriátrico</h6>
            <li>
              Así evitamos la proliferación de bacterias y microorganismos.
            </li>
            <li>Usar agua templada, un jabón neutro y una manopla suave.</li>
            <li>
              Si existiera dificultad para llegar a los pies, se puede usar un
              cepillo de mango largo, cepillando suave y sin uso de guantes.
            </li>
            <li>
              Secar minuciosamente con una toalla suave, insistiendo bien entre
              los dedos.{" "}
            </li>
            <li>
              El paso final es la hidratación. Aplicar crema (se recomienda con
              alto porcentaje en urea) en todo el pie excepto y entre los dedos,
              ya que puede producir maceración, y es un cultivo para la
              formación de hongos.
            </li>
            <p />
            <img className="materialboxed" width={650} src={imgConsejo1} />
            <p />
            <h6>2.- Examen de los pies</h6>
            <li>
              Teniendo los pies bien limpios y preparados debemos inspeccionar
              la planta y el dorso, prestando atención a los espacios digitales
              (uno por uno), y las uñas.
            </li>
            <li>
              Tratemos de ponernos en un lugar cómodo y con buena iluminación,
              bien sea natural o artificial, ayudándonos de un espejo si fuese
              necesario.{" "}
            </li>
            <li>
              En personas con movilidad reducida o falta de visión puede
              ayudarlo otra persona.
            </li>
            <p />
            <h6>3.- Cuidado de las uñas del pie</h6>
            <li>
              Es necesario siempre realizar el cuidado de las uñas en personas
              mayores y por manos de un podólogo.
            </li>
            <li>
              El tema de uñas encarnadas, deformadas o gruesas debe tratarse por
              un profesional.{" "}
            </li>
            <li>
              A veces las personas mayores pierden flexibilidad para llegar a
              los pies, y agudeza visual por lo que pueden provocarse heridas.
            </li>
            <li>
              Las uñas deben cortarse rectas, y no demasiado cortas para evitar
              que al crecer se claven alrededor de la carne.
            </li>
            <p />
            <img className="materialboxed" width={650} src={imgConsejo2} />
            <p />
            <h6>4.- Calzado adecuado y calcetines</h6>
            <li>
              Lo ideal para ir de compras por un par de zapatos, es por la
              tarde. Los pies se encuentran más dilatados a esas horas del día.
            </li>
            <li>
              Los zapatos, lo ideal para personas mayores, es que sea de buena
              calidad, preferiblemente de piel o cuero, que no deje al
              descubierto pies y talones, transpirable, blando y ligeramente
              flexible.{" "}
            </li>
            <li>
              La suela del zapato debe ser antideslizante y no demasiado gruesa,
              con buen contrafuerte en la parte trasera y puntera, sin que los
              dedos queden comprimidos.
            </li>
            <li>
              El tacón debe ser de 2 a 3 centímetros, para mantener
              estabilización de retropié junto a una postura correcta.
            </li>
            <li>
              El pie siempre debe ajustarse al zapato, y no el zapato al pie.
            </li>
            <li>
              Los calcetines y medias deben ser suaves y absorbentes,
              preferiblemente de algodón.
            </li>
            <li>
              Es recomendable que los calcetines se ajusten perfectamente al
              pie, que no queden grandes y formen pliegues o arrugas, o bien que
              queden estrechos y dificulten la circulación.{" "}
            </li>
            <p />
          </div>
        </div>
      </div>
    );
  }
}
