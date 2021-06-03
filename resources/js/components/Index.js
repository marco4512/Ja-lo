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
            <Navbar.Brand as ={Link} to="/Home"><img className="LogoI" src="https://ja-lo.herokuapp.com/images/Logo3.png" ></img></Navbar.Brand>
            <span className="Menu-Icon"><img  src="https://ja-lo.herokuapp.com/images/menu_white_24dp.svg" ></img></span> 
                <Nav className="mr-auto uln">
                <Nav.Link as ={Link} to="/Registro" className="uln uli Menu"> Registrat</Nav.Link>
                <Nav.Link href="#features" className="uln uli Menu">
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="Des" >
                            Servicios
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as ={Link} to="/Carpinteria" className="Opciones">Carpinteria</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Mecanica" className="Opciones">Mecanica</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Computacion" className="Opciones">Computacion</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Comida" className="Opciones">Comida</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Construccion" className="Opciones">Construccion</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/DiseñoWeb" className="Opciones">DiseñoWeb</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Electronica" className="Opciones">Electronica</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Fontaneria" className="Opciones">Fontaneria</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Informatica" className="Opciones">Informatica</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Limpieza" className="Opciones">Limpieza</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Peluqueria" className="Opciones">Peluqueria</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Publicidad" className="Opciones">Publicidad</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Sastreria" className="Opciones">Sastreria</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Soldadura" className="Opciones">Soldadura</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Sonido" className="Opciones">Sonido</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Traduccion" className="Opciones">Traduccion</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Transporte" className="Opciones">Transporte</Dropdown.Item>
                            <Dropdown.Item as ={Link} to="/Tutorias" className="Opciones">Tutorias</Dropdown.Item>
                            
                        </Dropdown.Menu>
                        </Dropdown>
                </Nav.Link>
                <Nav.Link as ={Link} to="/InicioSe" className="uln uli Menu" > Iniciar Sesion  </Nav.Link>
                
                </Nav>
                <Form inline>
            </Form>
            </Navbar>
            <Switch> 
            <Route exact path='/Registro' component= {Registro} /> 
            <Route exact path='/Home' component= {Home} /> 
            <Route exact path='/Index' component= {Home} /> 
            <Route exact path='/' component= {Home} /> 
            <Route exact path='/Carpinteria' component= {Carpinteria} /> 
            <Route exact path='/Mecanica' component= {Mecanica} /> 
            <Route exact path='/Computacion' component= {Computacion} />
            <Route exact path='/InicioSe' component= {InicioSe} />  
            <Route exact path='/Comida' component= {Comida} />
            <Route exact path='/Construccion' component= {Construccion} />
            <Route exact path='/DiseñoWeb' component= {DiseñoWeb} />
            <Route exact path='/Electronica' component= {Electronica} />
            <Route exact path='/Fontaneria' component= {Fontaneria} />
            <Route exact path='/Informatica' component= {Informatica} />
            <Route exact path='/Limpieza' component= {Limpieza} />
            <Route exact path='/Peluqueria' component= {Peluqueria} />
            <Route exact path='/Publicidad' component= {Publicidad} />
            <Route exact path='/Sastreria' component= {Sastreria} />
            <Route exact path='/Soldadura' component= {Soldadura} />
            <Route exact path='/Sonido' component= {Sonido} />
            <Route exact path='/Traduccion' component= {Traduccion} />
            <Route exact path='/Transporte' component= {Transporte} />
            <Route exact path='/Tutorias' component= {Tutorias} />
            
            </Switch>
            </BrowserRouter>
        </div>
        
    );
}
export default Example;
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}