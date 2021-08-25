import React, { Component } from 'react'
import { useAuth0 } from '@auth0/auth0-react';



const RegistroGratis = () =>  {
    
    const { user } = useAuth0();
        return (
            <>
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <section>      
                        <h1 className="entry-title"><span>Registro PodoUbica</span> </h1>
                        <hr />
                        <form className="form-horizontal" method="post" name="signup" id="signup" encType="multipart/form-data">        
                        <div className="form-group">
                            <label className="control-label col-sm-3">Email<span className="text-danger">*</span></label>
                            <div className="col-md-8 col-sm-9">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope" /></span>
                                <input type="email" className="form-control" name="emailid" id="emailid" placeholder="Enter your Email ID" defaultValue = {user.email} />
                            </div>
                            <small> Su ID de correo electrónico se utiliza para garantizar la seguridad de su cuenta, autorización y recuperación de acceso. </small> </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Password <span className="text-danger">*</span></label>
                            <div className="col-md-5 col-sm-8">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock" /></span>
                                <input type="password" className="form-control" name="password" id="password" placeholder="Choose password (5-15 chars)" defaultValue />
                            </div>   
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Confirma Password <span className="text-danger">*</span></label>
                            <div className="col-md-5 col-sm-8">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock" /></span>
                                <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Confirm your password" defaultValue />
                            </div>  
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Nombre Completo <span className="text-danger">*</span></label>
                            <div className="col-md-8 col-sm-9">
                            <input type="text" className="form-control" name="mem_name" id="mem_name" placeholder="Enter your Name here" defaultValue = {user.nickname} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Fecha Nacimiento <span className="text-danger">*</span></label>
                            <div className="col-xs-8">
                            <div className="form-inline">
                                <div className="form-group">
                                <select name="dd" className="form-control">
                                    <option value>Día</option>
                                    <option value={1}>1 </option><option value={2}>2 </option><option value={3}>3 </option><option value={4}>4 </option><option value={5}>5 </option><option value={6}>6 </option><option value={7}>7 </option><option value={8}>8 </option><option value={9}>9 </option><option value={10}>10 </option><option value={11}>11 </option><option value={12}>12 </option><option value={13}>13 </option><option value={14}>14 </option><option value={15}>15 </option><option value={16}>16 </option><option value={17}>17 </option><option value={18}>18 </option><option value={19}>19 </option><option value={20}>20 </option><option value={21}>21 </option><option value={22}>22 </option><option value={23}>23 </option><option value={24}>24 </option><option value={25}>25 </option><option value={26}>26 </option><option value={27}>27 </option><option value={28}>28 </option><option value={29}>29 </option><option value={30}>30 </option><option value={31}>31 </option>              </select>
                                </div>
                                <div className="form-group">
                                <select name="mm" className="form-control">
                                    <option value>Mes</option>
                                    <option value={1}>Jan</option><option value={2}>Feb</option><option value={3}>Mar</option><option value={4}>Apr</option><option value={5}>May</option><option value={6}>Jun</option><option value={7}>Jul</option><option value={8}>Aug</option><option value={9}>Sep</option><option value={10}>Oct</option><option value={11}>Nov</option><option value={12}>Dec</option>              </select>
                                </div>
                                <div className="form-group">
                                <select name="yyyy" className="form-control">
                                    <option value={0}>Año</option>
                                    <option value={1955}>1955 </option><option value={1956}>1956 </option><option value={1957}>1957 </option><option value={1958}>1958 </option><option value={1959}>1959 </option><option value={1960}>1960 </option><option value={1961}>1961 </option><option value={1962}>1962 </option><option value={1963}>1963 </option><option value={1964}>1964 </option><option value={1965}>1965 </option><option value={1966}>1966 </option><option value={1967}>1967 </option><option value={1968}>1968 </option><option value={1969}>1969 </option><option value={1970}>1970 </option><option value={1971}>1971 </option><option value={1972}>1972 </option><option value={1973}>1973 </option><option value={1974}>1974 </option><option value={1975}>1975 </option><option value={1976}>1976 </option><option value={1977}>1977 </option><option value={1978}>1978 </option><option value={1979}>1979 </option><option value={1980}>1980 </option><option value={1981}>1981 </option><option value={1982}>1982 </option><option value={1983}>1983 </option><option value={1984}>1984 </option><option value={1985}>1985 </option><option value={1986}>1986 </option><option value={1987}>1987 </option><option value={1988}>1988 </option><option value={1989}>1989 </option><option value={1990}>1990 </option><option value={1991}>1991 </option><option value={1992}>1992 </option><option value={1993}>1993 </option><option value={1994}>1994 </option><option value={1995}>1995 </option><option value={1996}>1996 </option><option value={1997}>1997 </option><option value={1998}>1998 </option><option value={1999}>1999 </option><option value={2000}>2000 </option><option value={2001}>2001 </option><option value={2002}>2002 </option><option value={2003}>2003 </option><option value={2004}>2004 </option><option value={2005}>2005 </option><option value={2006}>2006 </option>              </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Genero <span className="text-danger">*</span></label>
                            <div className="col-md-8 col-sm-9">
                            <label>
                                <input name="gender" type="radio" defaultValue="Male" defaultChecked />
                                Hombre </label>
                            &nbsp;&nbsp;&nbsp;
                            <label>
                                <input name="gender" type="radio" defaultValue="Female" />
                                Mujer </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Telefono. <span className="text-danger">*</span></label>
                            <div className="col-md-5 col-sm-8">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-phone" /></span>
                                <input type="text" className="form-control" name="contactnum" id="contactnum" placeholder="Enter your Primary contact no." defaultValue />
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Móvil. <br />
                            <small>(if any)</small></label>
                            <div className="col-md-5 col-sm-8">
                            <input type="text" className="form-control" name="contactnum2" id="contactnum2" placeholder="Any other or Landline no (if any)" defaultValue />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">Foto de Perfil <br />
                            <small>(optional)</small></label>
                            <div className="col-md-5 col-sm-8">
                            <div className="input-group"> <span className="input-group-addon" id="file_upload"><i className="glyphicon glyphicon-upload" /></span>
                                <input type="file" name="file_nm" id="file_nm" className="form-control upload" placeholder aria-describedby="file_upload" />
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-offset-3 col-md-8 col-sm-9"><span className="text-muted"><span className="label label-danger">Nota:-</span>Al hacer clic en Registrarse, usted acepta nuestros <a href="#">Terminos</a> y que ha leído nuestra <a href="#">Politica</a>, incluyendo nuestro <a href="#">Uso Cookies</a>.</span> </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-offset-3 col-xs-10">
                            <input name="Submit" type="submit" defaultValue="Sign Up" className="btn btn-primary" />
                            </div>
                        </div>
                        </form>
                    </section></div>
                </div>
                </div>

                </>
        )
    }
    export default RegistroGratis;
