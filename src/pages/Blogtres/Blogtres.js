import React, { Component } from 'react'
import imgBlog3 from "../../images/HomePage/Blog/BLOG3_APOYO.jpg"
export default class Blogtres extends Component {
    render() {
        return (
            <div className="container">    
                <h1 className="text-center" style={{paddingTop: "0%"}}>
                Blog PodoUbica
                </h1>
            <div class="valign-wrapper">
              
            <div class="hide-on-small-only">
              <h5>¿Qué debemos hacer si pisamos un clavo? ¿Es necesario vacunarse contra el tétano?</h5>
            <blockquote>
                Con frecuencia las heridas por pinchazos en el pie son producidas por objetos cortantes, tales como trozos de vidrios o metales afilados (objetos punzantes como clavos o tornillos), y en ocasiones por una mordedura de un animal. Por lo tanto, estas heridas pueden llegar a ser peligrosas si no son tratadas inmediatamente, puesto que pueden acabar en una seria infección.
            </blockquote>
      <img class="materialboxed" width="100%" src={imgBlog3}/>
      <blockquote>
        Cuando hay heridas profundas se corre el riesgo de contraer tétanos, y puede causarlo cualquier objeto punzante. El Tétanos es una infección que conduce a una serie de contracciones musculares por todo el cuerpo, comenzando por el agarrotamiento de la mandíbula. En general, el tétano es una enfermedad peligrosa. Si no se trata a tiempo, da fiebre, se contraen los músculos, se dificulta la respiración y se acelera el corazón, con el riesgo de producir un síncope cardíaco, una sofocación o una asfixia.
      </blockquote>
      <h6>¿Qué te recomendamos?</h6>
      <b> 1.       Visitar un centro de salud:</b>
            <blockquote>
                Un profesional de la salud (médico o enfermera) debe evaluar la gravedad de la herida, y determinar si está infectada o no. Es importante dar cada detalle de cómo se provocó la herida, así puede indicar el mejor tratamiento.
            </blockquote>
            <b>2.       Tratamiento local:</b>
            <blockquote>
                La herida debe mantenerse siempre limpia. Lavarse la zona con frecuencia con un jabón anti-bacteriano y luego limpia la herida con un buen antiséptico, siempre siguiendo las indicaciones del médico o profesional que te evaluó, incluso si se debe hacer cambio de vendaje.
            </blockquote>
            <b> 3.       Vacuna contra el tétanos:</b>
            <blockquote>
                Sabías que en el caso de los niños se hace un refuerzo de la vacuna mixta que se les pone dentro del Calendario de Vacunación. En los mayores se recomienda una gammaglobulina antitetánica. Aquí tienes más información sobre la vacuna del tétanos.
            </blockquote>
            <b> 4.       Alivio del dolor:</b>
            <blockquote>
                Las heridas en el pie pueden producir diferentes niveles de dolor. Aunque esta situación no es muy común, si uno de los vasos sanguíneos principales del pie es dañado puedes sufrir mucho dolor y sangrado.
                
                <li>
                    Lava el pie lesionado en agua tibia al menos dos veces al día durante los dos primeros días (siguiendo las indicaciones del médico o profesional que te evaluó).
                </li>
                <li>
                Evita el contacto de las heridas abiertas con superficies duras hasta que las hayas vendado.
                </li>
                <li>
                Evita caminar sobre el pie lesionado si puedes, porque cualquier clase de presión puede aumentar el dolor.
                </li>
                <li>
                Si el dolor o el enrojecimiento de la zona aumentan, vuelve a visitar a tu médico porque puede que la herida esté infectada.     
                </li>
            </blockquote>
            <b> 5.       Prevención:</b>
            <blockquote>
            Si la herida se ha producido en el trabajo, evita que vuelva a suceder utilizando el calzado de seguridad indicado para tu profesión y los riesgos a los que estás expuesto. Siempre debes usar un calzado si vas a estar en zonas que creas que son inseguras. 
            </blockquote>
            </div>
            </div>
          </div>
        )
    }
}
