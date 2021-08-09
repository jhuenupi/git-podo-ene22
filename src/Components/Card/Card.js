import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <>
                <div className="row">
                <form className="col s12">
                    <div className="row">
                    <div className="input-field col s12">                            
                        </div>                        
                        <div className="input-field col s12">

                                <select>
                                   <option value="1">Particular</option>
                                    <option value="2">Centro Medico</option>
                                </select>

                          
                        </div>
                        <div className="input-field col s12">
                                <select>
                                   <option value="1">A Domicilio</option>
                                    <option value="2">En Local</option>
                                </select>

                          
                        </div>
                        <div className="input-field col s12">
                            <select>
                                <option value="1">Santiago</option>
                                <option value="2">Conchalí</option>
                                <option value="3">Huechuraba</option>
                                <option value="4">Independencia</option>
                                <option value="5">Quilicura</option>
                                <option value="6">Recoleta</option>
                                <option value="7">Renca</option>
                                <option value="8">Las Condes</option>
                                <option value="9">Lo Barnechea</option>
                                <option value="10">Providencia</option>
                                <option value="11">Vitacura</option>
                                <option value="12">La Reina</option>
                                <option value="13">Macul</option>
                                <option value="14">Ñuñoa</option>
                                <option value="15">Peñalolén</option>
                                <option value="16">La Florida</option>
                                <option value="17">La Granja</option>
                                <option value="18">El Bosque</option>
                                <option value="19">La Cisterna</option>
                                <option value="20">La Pintana</option>
                                <option value="21">San Ramón</option>
                                <option value="22">Lo Espejo</option>
                                <option value="23">Pedro Aguirre Cerda</option>
                                <option value="24">San Joaquín</option>
                                <option value="25">San Miguel</option>
                                <option value="26">Cerrillos</option>
                                <option value="27">Estación Central</option>
                                <option value="28">Maipú</option>
                                <option value="29">Cerro Navia</option>
                                <option value="30">Lo Prado</option>
                                <option value="31">Pudahuel</option>
                                <option value="32">Quinta Normal</option>
                            </select>
                        </div>                        
                        <div className="input-field col s12">                
                        <a class="waves-effect waves-light btn">Buscar</a>
                        </div>                
                    </div>
                </form>
                </div>
                <div className="section row ">                    
                    <h4 className=""><span class="blue-text text-darken-2">BLOG PODOUBICA</span></h4>
                </div>                
                <div className="row">
                <div className="col s7 m3">
                        <div className="card">
                            <div className="card-image">
                            <img src="images/blog/BLOG1_PORTADA_1.jpg" />
                            <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                            <p>“CUANDO HEREDAMOS UN CALZADO”
DEBEMOS PREGUNTARNOS ¿ES RECOMENDABLE PARA LOS PIES...</p>
                            </div>
                            <div className="card-action">
                            <a href="/bloguno">Ver mas...</a>
                            </div>
                        </div>
                    </div>                    
                    <div className="col s7 m3">
                        <div className="card">
                            <div className="card-image">
                            <img src="images/blog/BLOG2_PORTADA.jpg" />
                            <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                            <p>PODOUBICA Y EPC (ESCUELA DE PROFESIONES CLÍNICAS) FIRMAN ACUERDO DE COLABORACIÓN</p>
                            </div>
                            <div className="card-action">
                            <a href="/blogdos">Ver mas...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                            <img src="images/blog/BLOG3_PORTADA.jpg" />
                            <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                            <p>¿Qué debemos hacer si pisamos un clavo? ¿Es necesario vacunarse contra el tétano?</p>
                            </div>
                            <div className="card-action">
                            <a href="/blogtres">Ver mas...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                            <img src="images/blog/BLOG4_PORTADA.jpg" />
                            <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                            <p>¿Notas que la piel de tus dedos, tobillos, talones o cualquier otra zona del pie está seca?</p>
                            </div>
                            <div className="card-action">
                            <a href="/blogcuatro">Ver mas...</a>
                            </div>
                        </div>
                    </div>                        
                </div>
                <div className="section row ">                    
                    <h4 className=""><span class="blue-text text-darken-2">CONSEJOS PODOLOGICOS</span></h4>
                </div>
                <div className="row">
                    <div className="col s7 m3">
                        <div className="card">
                            <div className="card-image">
                            <img src="images/Consejos/consejo1_portada.jpg" />
                            <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                            <p>PIES SALUDABLES PARA EL VERANO</p>
                            </div>
                            <div className="card-action">
                            <a href="/consejo1">Ver mas...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                            <img src="images/Consejos/consejo2_portada.jpg" />
                            <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                            <p>CUIDADOS DEL PIE DIABÉTICO</p>
                            </div>
                            <div className="card-action">
                            <a href="/consejo2">Ver mas..</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                            <img src="images/Consejos/consejo3_portada.jpg" />
                            <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                            <p>CUIDADO DEL PIE GERIÁTRICO</p>
                            </div>
                            <div className="card-action">
                            <a href="/consejo3">Ver mas...</a>
                            </div>
                        </div>
                    </div>                        
                </div>                  
            </>
        )
    }
}
