import React ,{useState,useEffect,useMemo} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Axios from 'axios'
import Modal from 'react-bootstrap/Modal';
const Registro = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({
            nombre:'',
            apellido:'',
            añoNacimiento:'',
            telefono:'',
            email:'',
            calle:'',
            numcalle:'',
            idColonia:'',
            idServicio:'',
            idClasificacion:'',
            Foto1:'',
            Foto2:'',
            Foto3:'',
            Estado:'',
            Municipio:'',
            password:'',
            Descripcion:'',
            Comentarios:''

    })
    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
        FiltroMuni();
        FiltroCol();
    }
     const Limp =()=>{
      document.getElementById("MyForm").reset();
     }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('nombre', data.nombre)
        formData.append('apellido',data.apellido)
        formData.append('añoNacimiento',data.añoNacimiento)
        formData.append('telefono',data.telefono)
        formData.append('email',data.email)
        formData.append('calle',data.calle)
        formData.append('numcalle',data.numcalle)
        formData.append('idColonia',data.idColonia)
        formData.append('idServicio',data.idServicio)
        formData.append('idClasificacion',data.idClasificacion)
        formData.append('Foto1',data.Foto1)
        formData.append('Foto2',data.Foto2)
        formData.append('Foto3',data.Foto3)
        formData.append('Estado',data.Estado)
        formData.append('Municipio',data.Municipio)
        formData.append('password',data.password)
        formData.append('Descripcion',data.Descripcion)
        formData.append('Comentarios',data.Comentarios)
          await Axios({
            method: 'post',
            url: 'http://localhost/ja-las/public/NTrabajador',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(response=>{
              
            if (response.data.login== true){
                console.log('Datos Cargados');
              }
              setShow(true);
          })
          .catch(error => {
            
            console.log('Error Login', error )
            alert('Error Datos Incompletos',setShow(false));
          }
          )
          if(show){
            setShow(true);
          }
          console.log('nombre', data.nombre);
          console.log('apellido',data.apellido);
          console.log('añoNacimiento',data.añoNacimiento);
          console.log('telefono',data.telefono);
          console.log('email',data.email);
          console.log('calle',data.calle);
          console.log('numcalle',data.numcalle);
          console.log('idColonia',data.idColonia);
          console.log('idServicio',data.idServicio);
          console.log('idClasificacion',data.idClasificacion);
          console.log('Foto1',data.Foto1);
          console.log('Foto2',data.Foto2);
          console.log('Foto3',data.Foto3);
          console.log('Estado',data.Estado);
          console.log('Municipio',data.Municipio);
          console.log('password',data.password);
          console.log('Descripcion',data.Descripcion);
          console.log('Comentarios',data.Comentarios);
          Limp();

        }
            const [ListaEstados, setListaEstaDOS] = useState([]);
            useEffect(() => {
                (async () => {
                  const response = await Axios({
                      method: 'get',
                      url: 'http://localhost/ja-las/public/-estado'
                    
                    })
                    .then(response => {
                        setListaEstaDOS(response.data);
                    })
                })();
              }, []);
              const [ListaMunicipios, setListaMunicipios] = useState([]);
              const FiltroMuni = useMemo (() =>
                  (async () => {
                    const response = await Axios({
                        method: 'get',
                        url: 'http://localhost/ja-las/public/Join?id='+$('#idEstado').val()
                      
                      })
                      .then(response => {
                          setListaMunicipios(response.data);
                      })
                  })
                  ,[ListaMunicipios])
              const [ListaColonias, setListaColonias] = useState([]);
              const FiltroCol = useMemo (() =>
                  (async () => {
                    const response = await Axios({
                        method: 'get',
                        url: 'http://localhost/ja-las/public/JoinCol?id='+$('#idMunicipio').val()
                      
                      })
                      .then(response => {
                          setListaColonias(response.data);
                      })
                  })
                  ,[ListaColonias])

            const [ListaServicios, setListaServicios] = useState([]);
            const [ListaClasifica, setListaClasifica] = useState([]);
            useEffect(() => {
                (async () => {
                  const response = await Axios({
                      method: 'get',
                      url: 'http://localhost/ja-las/public/Servicios'
                    
                    })
                    .then(response => {
                        setListaServicios(response.data);
                    })
                })();
                (async () => {
                  const response = await Axios({
                      method: 'get',
                      url: 'http://localhost/ja-las/public/Clasifi'
                    
                    })
                    .then(response => {
                        setListaClasifica(response.data);
                    })
                })();
              }, []);
             
    return (
        <div className="Con">
            <section className="Mai">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registro Exitoso</Modal.Title>
          </Modal.Header>
          <Modal.Body>¡Bienvenido a la familia! Aqui te ayudaremos a que explotes tu potencial</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              ¡Entendido!
            </Button>
          </Modal.Footer>
        </Modal>
         <h1>Registrate Gratis</h1> 
         </section>
         <Form className="labelForm" id="MyForm">
            <Form.Row className="labelForm">
                    <Form.Group as={Col} >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Correo"
                     name="email"
                     onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    name="password"
                    onChange={handleInputChange}  />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="labelForm">
                    <Form.Group as={Col} >
                    <Form.Label>nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre"
                     
                     name="nombre"
                     onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Apellidos"
                    
                    name="apellido"
                    onChange={handleInputChange}  />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="labelForm" >
                <Form.Group >
                    <Form.Label>Calle</Form.Label>
                    <Form.Control placeholder="Calle" 
                    
                     name="calle"
                     onChange={handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Numero</Form.Label>
                    <Form.Control placeholder="Numero" 
                    
                    name="numcalle"
                    onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control size="md" as="select" id="idEstado" name="Estado"
                    onChange={handleInputChange}>
                    <option value={0}>Selecciona uno</option>
                    {ListaEstados.map(dataItem =>(
                    <option key={dataItem.id} value={dataItem.id}>{dataItem.nombre}</option>
                     ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Municipio</Form.Label>
                    <Form.Control size="md" as="select" id="idMunicipio" name="Municipio"
                    onChange={handleInputChange}>
                    <option value={0}>Selecciona uno</option>
                    {ListaMunicipios.map(dataItem =>(
                    <option key={dataItem.Municipio_id} value={dataItem.Municipio_id}>{dataItem.nombre}</option>
                     ))
                    }
                </Form.Control>     
                </Form.Group>
                </Form.Row>
                <Form.Row className="labelForm" >
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Colonia</Form.Label>
                    <Form.Control size="md" as="select" name="idColonia"
                    onChange={handleInputChange} >
                    <option value={0}>Selecciona uno</option>
                    {ListaColonias.map(dataItem =>(
                    <option key={dataItem.id} value={dataItem.id}>{dataItem.nombre}</option>
                     ))
                    }
                </Form.Control> 
                </Form.Group>
                <Form.Group as ={Col}>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control placeholder="Telefono" 
                    
                    name='telefono' onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Servicio</Form.Label>
                    <Form.Control size="md" as="select" name="idServicio"
                    onChange={handleInputChange} >
                    <option value={0}>Selecciona uno</option>
                    {ListaServicios.map(dataItem =>(
                    <option key={dataItem.id} value={dataItem.id}>{dataItem.nombre}</option>
                     ))
                    }
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Tipo de Cuenta </Form.Label>
                    <Form.Control size="md" as="select" name="idClasificacion"
                    onChange={handleInputChange} >
                    <option value={0}>Selecciona uno</option>
                    {ListaClasifica.map(dataItem =>(
                    <option key={dataItem.id} value={dataItem.id}>{dataItem.nombre}</option>
                     ))
                    }
                </Form.Control>
                </Form.Group>
                </Form.Row>
                <Form.Row className="labelForm">
                <Form.Group as={Col}>
                    <Form.Label>Imagen 1</Form.Label>
                    <Form.Control id="imagenInput" type="txt" placeholder="www.imagen1.com" 
                    
                    name='Foto1' onChange={handleInputChange}  />
                </Form.Group>
                <Form.Group  as={Col} >
                    <Form.Label>Imagen 2</Form.Label>
                    <Form.Control type="text" placeholder="www.imagen1.com" 
                    
                    name='Foto2' onChange={handleInputChange} />
                </Form.Group>
                <Form.Group   as={Col}>
                    <Form.Label>Imagen 3</Form.Label>
                    <Form.Control type="text" placeholder="www.imagen1.com" 
                    
                    name='Foto3' onChange={handleInputChange}  />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Año Nacimiento</Form.Label>
                    <Form.Control type="text" placeholder=""
                    
                    name='añoNacimiento' onChange={handleInputChange}  />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Mes</Form.Label>
                    <Form.Control size="md" as="select" name="Comentarios"
                    onChange={handleInputChange} >
                    <option value={0}>Selecciona uno</option>
                    <option value={1}>Enero</option>
                    <option value={2}>Febrero</option>
                    <option value={3}>Marzo</option>
                    <option value={4}>Abril</option>
                    <option value={5}>Mayo</option>
                    <option value={6}>Junio</option>
                    <option value={7}>Julio</option>
                    <option value={8}>Agosto</option>
                    <option value={9}>Septiembre</option>
                    <option value={10}>Octubre</option>
                    <option value={11}>Noviembre</option>
                    <option value={12}>Diciembre</option>
                </Form.Control>
                </Form.Group>
                </Form.Row >
                <Form.Label className="labelForm" >Describete a ti mismo</Form.Label>
                <Form.Control   as="textarea" rows={3} 
                
                name='Descripcion' onChange={handleInputChange} />
                <Form.Group >
                    <Form.Check className="labelForm" type="checkbox" label="Acepto Terminos y condiciones" />
                </Form.Group>
                       
    <Button variant="primary" type="submit" onClick={handleSubmit}>
    Comenzemos
  </Button>
  
</Form>
        </div>
    );
}
export default Registro;
if (document.getElementById('registro')) {
    ReactDOM.render(<Example />, document.getElementById('registro'));
}