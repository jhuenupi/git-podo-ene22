import React, { Component } from 'react'
import imgBlog1 from "../../images/HomePage/Blog/BLOG2_DETALLE.jpg"
import imgBlogEPC from "../../images/HomePage/Blog/EPC_LOGO.png"
import imgBlogLogo from "../../images/HomePage/Blog/logo_letras2.png"


export default class Blogdos extends Component {
    render() {
        return (
            <div className="container">    
                <h1 className="text-center" style={{paddingTop: "0%"}}>
                    Blog PodoUbica
                </h1>
                <div class="valign-wrapper">
                    <div class="hide-on-small-only">
                            <h5>PODOUBICA Y EPC (ESCUELA DE PROFESIONES CLÍNICAS) FIRMAN ACUERDO DE COLABORACIÓN</h5>
                        <blockquote>
                            Como parte de nuestro plan estratégico PODOUBICA y EPC (Escuela de Profesiones Clínicas) firmamos un acuerdo de colaboración mutua. Apostando por ejes claves para la formación profesional en el campo de la podología, la investigación, el desarrollo y la contribución social.
                        </blockquote>
                            <img class="materialboxed" width="650" src={imgBlog1}/>
                        <blockquote>
                            EPC (Escuela Profesiones Clínicas) es un líder permanente en la búsqueda y entrega de los nuevos conocimientos y tecnologías en el área de la podología que con una mirada humanista y cristiana entrega garantías permanente de excelencias, por su parte PODOUBICA es una plataforma online que ha sido creada para Profesionales de la Podología, cuyo objetivo es ser una vitrina publicitaria en redes sociales. Mostrando cada una de las ofertas de manera georreferenciada, a fin de dar la mayor información acerca de la ubicación y su entorno, así como también de quienes prestan este tipo de servicios. 
                        </blockquote>
                        <blockquote>
                            Este es un impulso que permite formalizar una alianza con una institución de alto prestigio que entrega la oferta formativa especializada y el conocimiento, lo que es un gran reto con un notable impacto.
                        </blockquote>
                            <h5>“GENERAR VALOR A TRAVÉS DEL CONOCIMIENTO, IMPLANTAR UNA OFERTA FORMATIVA ESPECIALIZADA E IMPACTAR EN EL ÁMBITO DE LAS REDES SOCIALES PARA VISIBILIZAR LA PROFESIÓN DE PODOLOGÍA CLÍNICA A UN MÁS ALTO NIVEL, SON ALGUNOS DE LOS OBJETIVOS DEL DESARROLLO DE ESTE ACUERDO DE COLABORACIÓN”.</h5>

                        <div class="row" style={{paddingTop: "5%"}}>
                            <div class="col s1">
                                <img src= {imgBlogEPC}/>
                            </div>
                            <div class="col s2">
                                <img src={imgBlogLogo} width="80%"/>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
          
        )
    }
}
