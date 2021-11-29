import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  HashRouter,
} from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Testimonial from "./pages/Testimonial/Testimonial";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Slider2 from "./Components/Slider2/Slider2";
import Sections from "./Components/Sections/Sections";
import Carousel from "./Components/Carousel/Carousel";
import HeroSlider from "./Components/HeroSlider/HeroSlider";
import Bloguno from "./pages/BlogUno/Bloguno";
import Blogdos from "./pages/Blogdos/Blogdos";
import Blogtres from "./pages/Blogtres/Blogtres";
import Blogcuatro from "./pages/Blogcuatro/Blogcuatro";
import Consejo1 from "./pages/Consejo1/Consejo1";
import Consejo2 from "./pages/Consejo2/Consejo2";
import Consejo3 from "./pages/Consejo3/Consejo3";
import "./index.css";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Logout from "./pages/Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Planes from "./pages/Planes/Planes";
import RegistroGratis from "./pages/RegistroGratis/RegistroGratis";
import PlanBasico from "./pages/PlanBasico/PlanBasico";
import PlanPlus from "./pages/PlanPlus/PlanPlus";
import getUser from "./Components/helpers/getUser";
import EditPerfil from "./pages/Profile/EditPerfil";
import TerminoCondiciones from "./pages/TerminoCondiciones/TerminoCondiciones";
import simpleRestProvider from "ra-strapi-rest";
import { fetchUtils, Admin, Resource } from "react-admin";
import VerticalTabs from "./Components/VerticalTabs/VerticalTabs";

import {
  PostList,
  PostEdit,
  PostCreate,
} from "../src/Components/PodoServicios/RPodoServicios";
import authProvider from "./Components/helpers/authProvider";
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import Privacidad from "./pages/Privacidad/Privacidad";

const dataProvider = simpleRestProvider("http://localhost:1337");

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  // const [todos, setTodos] = useState()
  // const fetchApi = async () => {
  //     const url = "http://localhost:1337/usuariospods?email=jjhh@gmail.com"
  //     //const response = await fetch(url+'?email='+user.email)
  //     const response = await fetch(url)
  //     const responseJSON = await response.json()
  //     setTodos(responseJSON)
  //     console.log(responseJSON)
  // }
  // useEffect(() => {
  //     fetchApi()
  // },[]
  // )
  const [usuario, setUsuario] = useState([]);

  const existeUsuario = () => {
    getUser().then((newUser) => {
      setUsuario(newUser);
    });
  };

  if (isLoading) return <h1>Loading...</h1>;
  //if (todos) return <h1>{todos.length}</h1>
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: "application/json" });
    }
    const { token } = JSON.parse(localStorage.getItem("auth"));
    options.headers.set("Authorization", `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };
  const dataProvider = simpleRestProvider("http://localhost:3000", httpClient);

  return (
    
  <>  
      <Navbar />
  <Router >
    <Route path={process.env.PUBLIC_URL + '/TerminoCondiciones'} exact>
        <TerminoCondiciones />
      </Route>
      <main>
        <Switch>
          {isAuthenticated ? (
            <>
              <existeUsuario />
              {usuario.length === 0 ? (
                <>
                  <Route exact path={process.env.PUBLIC_URL + '/'}>
                    <Planes />
                  </Route>
                  <Route exact path={process.env.PUBLIC_URL + '/registrogratis'}>
                    <RegistroGratis />
                  </Route>
                  <Route exact path={process.env.PUBLIC_URL + '/PlanBasico'}>
                    <PlanBasico />
                  </Route>
                  <Route exact path={process.env.PUBLIC_URL + '/PlanPlus'}>
                    <PlanPlus />
                  </Route>
                  <Route path={process.env.PUBLIC_URL + '/Edit'} exact>
                    {/* <Admin authProvider={authProvider} dataProvider={dataProvider}> 
                      <Resource name="podoservicios" list={PostList}  />
                    </Admin>  */}
                    {/* <EditPerfil/> */}
                    <VerticalTabs></VerticalTabs>
                  </Route>
                </>
              ) : (
                <>
                  <div className="center">
                    <h5>
                      <b>Bienvenido {user.nickname}</b>
                    </h5>
                  </div>
                  <HeroSlider />
                  <Card />
                </>
              )}
            </>
          ) : (
            <>
              <HeroSlider />
              <Route path={process.env.PUBLIC_URL + '/'} exact>
                <Card />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/Login'} exact>
                <Login></Login>
              </Route>
              <Route path={process.env.PUBLIC_URL + '/about'} exact>
                <About />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/service'} exact>
                <Services />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/testimonial'} exact>
                <Testimonial />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/contact'} exact>
                <Contact />
              </Route>
              <Route exact path="/bloguno" component={Bloguno}/>
              
              <Route path={process.env.PUBLIC_URL + '/blogdos'} exact>
                <Blogdos />
              </Route>
              <Route path={process.env.PUBLIC_URL +'/blogtres'} exact>
                <Blogtres />
              </Route>
              <Route path={process.env.PUBLIC_URL +'/blogcuatro'} exact>
                <Blogcuatro />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/consejo1'} exact>
                <Consejo1 />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/consejo2'} exact>
                <Consejo2 />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/consejo3'} exact>
                <Consejo3 />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/QuienesSomos'} exact>
                <QuienesSomos />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/Privacidad'} exact>
                <Privacidad />
              </Route>
              <Route path="/EditPerfil" exact>
                <h1>WELLLLLLLLLL DONE!!!!</h1>
              </Route>
            </>
          )}

          <Redirect to={process.env.PUBLIC_URL + '/'} />
        </Switch>
      </main>

      <Footer />
    </Router>
  </>
  );
}

export default App;
