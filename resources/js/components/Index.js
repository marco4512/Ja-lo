import React ,{Fragment,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Route,Switch,Link, NavLink,BrowserRouter} from 'react-router-dom';
import Registro from './Registro';
import Home from './Home';
import Carpinteria from './Carpinteria';
import Mecanica from './Mecanica';
import Computacion from './Computacion';
import Comida from './Comida';
import Construccion from './Construccion';
import DiseñoWeb from './DiseñoWeb';
import Electronica from './Electronica';
import Fontaneria from './Fontaneria';
import Informatica from './Informatica';
import Limpieza from './Limpieza';
import Peluqueria from './Peluqueria';
import Publicidad from './Publicidad';
import Sastreria from './Sastreria';
import Soldadura from './Soldadura';
import InicioSe from './InicioSesion';
import Traduccion from './Traduccion';
import Transporte from './Transporte';
import Tutorias from './Tutorias';
import Sonido from './Sonido';
import './Styles/estilos.css';
const Example =()=> {
    return (
        <div>
           <BrowserRouter>
           <Navbar bg="none" variant="none" className="ColorNav logo-nav-cont">
            <Navbar.Brand as ={Link} to="/Home"><img className="LogoI" src="https://ja-lo.herokuapp.com/imagesLogo3.png" ></img></Navbar.Brand>
            <span className="Menu-Icon"><img  src="https://ja-lo.herokuapp.com/images/menu_white_24dp.svg" ></img></span> 
                <Nav className="mr-auto uln">
                <Nav.Link as ={Link} to="/ja-las/public/Registro" className="uln uli Menu"> Registrars</Nav.Link>
                <Nav.Link href="#features" className="uln uli Menu">
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="Des" >
                            Servicios
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Carpinteria" className="Opciones">Carpinteria</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Mecanica" className="Opciones">Mecanica</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Computacion" className="Opciones">Computacion</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Comida" className="Opciones">Comida</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Construccion" className="Opciones">Construccion</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/DiseñoWeb" className="Opciones">DiseñoWeb</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Electronica" className="Opciones">Electronica</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Fontaneria" className="Opciones">Fontaneria</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Informatica" className="Opciones">Informatica</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Limpieza" className="Opciones">Limpieza</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Peluqueria" className="Opciones">Peluqueria</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Publicidad" className="Opciones">Publicidad</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Sastreria" className="Opciones">Sastreria</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Soldadura" className="Opciones">Soldadura</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Sonido" className="Opciones">Sonido</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Traduccion" className="Opciones">Traduccion</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Transporte" className="Opciones">Transporte</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/ja-las/public/Tutorias" className="Opciones">Tutorias</Dropdown.Item>
                            
                        </Dropdown.Menu>
                        </Dropdown>
                </Nav.Link>
                <Nav.Link as ={Link} to="/ja-las/public/InicioSe" className="uln uli Menu" > Iniciar Sesion  </Nav.Link>
                
                </Nav>
                <Form inline>
            </Form>
            </Navbar>
            <Switch> 
            <Route exact path='/ja-las/public/Registro' component= {Registro} /> 
            <Route exact path='/Home' component= {Home} /> 
            <Route exact path='/ja-las/public/Index' component= {Home} /> 
            <Route exact path='/ja-las/public/' component= {Home} /> 
            <Route exact path='/ja-las/public/Carpinteria' component= {Carpinteria} /> 
            <Route exact path='/ja-las/public/Mecanica' component= {Mecanica} /> 
            <Route exact path='/ja-las/public/Computacion' component= {Computacion} />
            <Route exact path='/ja-las/public/InicioSe' component= {InicioSe} />  
            <Route exact path='/ja-las/public/Comida' component= {Comida} />
            <Route exact path='/ja-las/public/Construccion' component= {Construccion} />
            <Route exact path='/ja-las/public/DiseñoWeb' component= {DiseñoWeb} />
            <Route exact path='/ja-las/public/Electronica' component= {Electronica} />
            <Route exact path='/ja-las/public/Fontaneria' component= {Fontaneria} />
            <Route exact path='/ja-las/public/Informatica' component= {Informatica} />
            <Route exact path='/ja-las/public/Limpieza' component= {Limpieza} />
            <Route exact path='/ja-las/public/Peluqueria' component= {Peluqueria} />
            <Route exact path='/ja-las/public/Publicidad' component= {Publicidad} />
            <Route exact path='/ja-las/public/Sastreria' component= {Sastreria} />
            <Route exact path='/ja-las/public/Soldadura' component= {Soldadura} />
            <Route exact path='/ja-las/public/Sonido' component= {Sonido} />
            <Route exact path='/ja-las/public/Traduccion' component= {Traduccion} />
            <Route exact path='/ja-las/public/Transporte' component= {Transporte} />
            <Route exact path='/ja-las/public/Tutorias' component= {Tutorias} />
            
            </Switch>
            </BrowserRouter>
        </div>
        
    );
}
export default Example;
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}