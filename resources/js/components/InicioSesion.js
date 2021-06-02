import React ,{Fragment,useState,useEffect,Componet,useMemo} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';


const InicioSe =()=> {
const handleShow = () => {setShow(true); } 
const handleShow3 = () => {setShow3(true); } 
const handleShow4 = () => {setShow4(true); }
const handleShow5 = () => {setShow5(true); EstadosFill(); MuniFill(); FiltroCol();} 
const handleShow6 = () => {setShow6(true); } 
const handleShow7 = () => {setShow7(true); } 
const handleShow8 = () => {setShow8(true); } 
const handleShow9 = () => {setShow9(true); } 
const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);
const [show3, setShow3] = useState(false);
const [show4, setShow4] = useState(false);
const [show5, setShow5] = useState(false);
const [show6, setShow6] = useState(false);
const [show7, setShow7] = useState(false);
const [show8, setShow8] = useState(false);
const [show9, setShow9] = useState(false);
const handleClose = () => setShow(false);
const handleClose2 = () => setShow2(false);
const handleClose3 = () => setShow3(false);
const handleClose4 = () => setShow4(false);
const handleClose5 = () => setShow5(false);
const handleClose6 = () => setShow6(false);
const handleClose7 = () => setShow7(false);
const handleClose8 = () => setShow8(false);
const handleClose9 = () => setShow9(false);
const [Trabajador, setTrabajador] = useState([]);
const [TrabajadorFill, setTrabajadorFill] = useState([]);
useEffect(() => {
  handleShow();
}, []);
const FiltroMuni = useMemo (() =>
       (async () => {
           const response = await Axios({
                             method: 'get',
                             url: 'http://localhost/ja-las/public/login?email='+$('#email').val()+'&'+'password='+$('#password').val()
                           })
                           .then(response => {
                               setTrabajador(response.data);
                               console.log(response.data);
                               setShow2(true);
                               
                           })
                           .catch(error => {
                            alert('Correo O password Incorrectos',);
                          }
                          )
                       })
                       ,[]);

             const Traba = async (e) =>{
                        console.log('valor',Trabajador);
                        let formData = new FormData();
                        formData.append('id',Trabajador.map(dataItem =>(dataItem.id)))
                        formData.append('nombre',$('#Nombre').val())
                        formData.append('apellido',$('#Apellido').val())

                          await Axios({
                            method: 'post',
                            url: 'http://localhost/ja-las/public/EditarTra',
                            data: formData,
                            config: { headers: {'Content-Type': 'multipart/form-data' }}
                          })
                          .then(response=>{
                            console.log('Datos modificados')
                            setShow4(false);
                            TrabaFill();

                          })
                          .catch(error => {
                            
                            console.log('Error Login', error )
                            alert('Error Datos Incompletos',);
                          }
                          )
                           }
                const TrabaFill = async (e) =>{
                            console.log('valor',Trabajador);
                            let formData = new FormData();
                            formData.append('id',Trabajador.map(dataItem =>(dataItem.id)))
                              await Axios({
                                method: 'post',
                                url: 'http://localhost/ja-las/public/UpdateTrabaja',
                                data: formData,
                                config: { headers: {'Content-Type': 'multipart/form-data' }}
                              })
                              .then(response=>{
                      
                                setTrabajadorFill(response.data);
                                console.log('Datos Cargados')
                                setShow2(false);
                                setShow(false);
                              })
                              .catch(error => {
                                
                                console.log('Error Login', error )
                                alert('Error Datos Incompletos',);
                              }
                              )
                               }
              const Imagen = async (e) =>{
                            console.log('valor',Trabajador);
                            let formData = new FormData();
                            formData.append('id',Trabajador.map(dataItem =>(dataItem.id)))
                            formData.append('Foto1',$('#Foto1').val())
                            formData.append('Foto2',$('#Foto2').val())
                            formData.append('Foto3',$('#Foto3').val())
    
                              await Axios({
                                method: 'post',
                                url: 'http://localhost/ja-las/public/UpdateImagen',
                                data: formData,
                                config: { headers: {'Content-Type': 'multipart/form-data' }}
                              })
                              .then(response=>{
                                console.log('Datos modificados')
                                setShow3(false);
                                TrabaFill();

    
                              })
                              .catch(error => {
                                
                                console.log('Error Login', error )
                                alert('Error Datos Incompletos',);
                              }
                              )
                               }
               const TrabaUbica = async (e) =>{
                               
                                let formData = new FormData();
                                formData.append('id',Trabajador.map(dataItem =>(dataItem.id)))
                                formData.append('calle',$('#Calle').val())
                                formData.append('numcalle',$('#Numero').val())
                                formData.append('idColonia',$('#Colonia').val())
                                formData.append('Estado',$('#idEstado').val())
                                formData.append('Municipio',$('#idMunicipio').val())
                                  await Axios({
                                    method: 'post',
                                    url: 'http://localhost/ja-las/public/UpdateUbicacion',
                                    data: formData,
                                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                                  })
                                  .then(response=>{
                                    console.log('Datos modificados')
                                    setShow5(false);
                                    TrabaFill();
    
        
                                  })
                                  .catch(error => {
                                    
                                    console.log('Error Login', error )
                                    alert('Error Datos Incompletos',);
                                  }
                                  )
                                   }
              const NuevoTel = async (e) =>{
                                 
                                    let formData = new FormData();
                                    formData.append('id',Trabajador.map(dataItem =>(dataItem.id)))
                                    formData.append('telefono',$('#Telefono').val())

                                      await Axios({
                                        method: 'post',
                                        url: 'http://localhost/ja-las/public/UpdateTelefono',
                                        data: formData,
                                        config: { headers: {'Content-Type': 'multipart/form-data' }}
                                      })
                                      .then(response=>{
                                        console.log('Datos modificados')
                                        setShow6(false);
                                        TrabaFill();
        
            
                                      })
                                      .catch(error => {
                                        
                                        console.log('Error Login', error )
                                        alert('Error Datos Incompletos',);
                                      }
                                      )
                                       }
          const NuevoDes = async (e) =>{
                                        console.log($('#Descripcion').val())
                                        let formData = new FormData();
                                        formData.append('id',Trabajador.map(dataItem =>(dataItem.id)))
                                        formData.append('Descripcion',$('#Descripcion').val())
    
                                          await Axios({
                                            method: 'post',
                                            url: 'http://localhost/ja-las/public/UpdateDescrip',
                                            data: formData,
                                            config: { headers: {'Content-Type': 'multipart/form-data' }}
                                          })
                                          .then(response=>{
                                            console.log('Datos modificados')
                                            setShow7(false);
                                            TrabaFill();
            
                
                                          })
                                          .catch(error => {
                                            
                                            console.log('Error Login', error )
                                            alert('Error Datos Incompletos',);
                                          }
                                          )
                                           }
              const NuevoEmail = async (e) =>{
                                            
                                            let formData = new FormData();
                                            formData.append('id',Trabajador.map(dataItem =>(dataItem.id)))
                                            formData.append('email',$('#Correo').val())
        
                                              await Axios({
                                                method: 'post',
                                                url: 'http://localhost/ja-las/public/Updateemail',
                                                data: formData,
                                                config: { headers: {'Content-Type': 'multipart/form-data' }}
                                              })
                                              .then(response=>{
                                                console.log('Datos modificados')
                                                setShow8(false);
                                                TrabaFill();
                
                    
                                              })
                                              .catch(error => {
                                                
                                                console.log('Error Login', error )
                                                alert('Error Datos Incompletos',);
                                              }
                                              )
                                               }
        const [ListaEstados, setListaEstaDOS] = useState([]);
        const EstadosFill = async (e) =>{
                                const response = await Axios({
                                  method: 'get',
                                  url: 'http://localhost/ja-las/public/-estado'
                                
                                })
                                .then(response => {
                                    setListaEstaDOS(response.data);
                                })
                              }
        const [ListaMunicipios, setListaMunicipios] = useState([]);
        const MuniFill = useMemo (() =>
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
  
const Borrar = async (e) =>{
                    TrabaFill();
                    console.log('Valor a Borrar',Trabajador);
                    let formData = new FormData();
                    formData.append('id',Trabajador.map(dataItem =>(dataItem.id)))
                      await Axios({
                        method: 'post',
                        url: 'http://localhost/ja-las/public/UpdateDelete',
                        data: formData,
                        config: { headers: {'Content-Type': 'multipart/form-data' }}
                      })
                      .then(response=>{
                        console.log('Datos modificados')
                        setShow9(false);
                        TrabaFill();
                   

                      })
                      .catch(error => {
                        
                        console.log('Error Login', error )
                        alert('Error Datos Incompletos',);
                      }
                      )
                       }
 
            

    return (
        <div className="Con">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Es bueno tenerte de Vuelta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
            <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control id="email" type="email" placeholder="Ingresa Tu correo" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control id="password"  type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={FiltroMuni}>
              Iniciar
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Elige que quieres hacer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
            <Form.Group >
            <Button variant="primary" onClick={handleShow9}>
              Borrar
            </Button>
            <Button variant="primary" onClick={TrabaFill}>
              Editar
            </Button>
            </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <Modal show={show9} onHide={handleClose9}>
          <Modal.Header closeButton>
            <Modal.Title>¿Eliminar esta cuenta?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
            <Form.Group >
            <Button variant="primary" onClick={Borrar}>
              Si
            </Button>
            <Button variant="primary" onClick={handleClose9}>
              No
            </Button>
            </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title>Ingresa las nuevas Imagenes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
          <Form.Group as={Col}>
          <Form.Label>Imagen 1</Form.Label>
          <Form.Control id="imagenInput" type="txt" placeholder="www.imagen1.com" 
                    id='Foto1'/>
                </Form.Group>
                <Form.Group  as={Col} >
                    <Form.Label>Imagen 2</Form.Label>
                    <Form.Control type="text" placeholder="www.imagen1.com" 
                    id='Foto2' />
                </Form.Group>
                <Form.Group   as={Col}>
                    <Form.Label>Imagen 3</Form.Label>
                    <Form.Control type="text" placeholder="www.imagen1.com" 
                    id='Foto3'/>
                </Form.Group>
            <Button variant="primary" onClick={Imagen}>
              Editar
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <Modal show={show4} onHide={handleClose4}>
          <Modal.Header closeButton>
            <Modal.Title>Coloca el nuevo Nombre </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
          <Form.Group as={Col} >
                    <Form.Label>nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" id="Nombre" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Apellidos" id="Apellido" />
                    </Form.Group>
            <Button variant="primary" onClick={Traba}>
              Editar
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <Modal show={show5} onHide={handleClose5}>
          <Modal.Header closeButton>
            <Modal.Title>Elige la nueva Ubicacion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
          <Form.Group as={Col} >
          <Form.Label>Estado</Form.Label>
                    <Form.Control size="md" as="select" id="idEstado" name="Estado" onChange={MuniFill}>
                    <option value={0}>Selecciona uno</option>
                    {ListaEstados.map(dataItem =>(
                    <option key={dataItem.id} value={dataItem.id}>{dataItem.nombre}</option>
                     ))}
           </Form.Control>
           <Form.Label>Municipio</Form.Label>
                    <Form.Control size="md" as="select" id="idMunicipio" name="Municipio" onChange={FiltroCol}>
                    <option value={0}>Selecciona uno</option>
                    {ListaMunicipios.map(dataItem =>(
                    <option key={dataItem.Municipio_id} value={dataItem.Municipio_id}>{dataItem.nombre}</option>
                     ))
                    }
                </Form.Control>
                <Form.Label>Colonia</Form.Label>
                    <Form.Control size="md" as="select" name="idColonia" id="Colonia" >
                    <option value={0}>Selecciona uno</option>
                    {ListaColonias.map(dataItem =>(
                    <option key={dataItem.id} value={dataItem.id}>{dataItem.nombre}</option>
                     ))
                    }
                </Form.Control> 
                <Form.Group >
                    <Form.Label>Calle</Form.Label>
                    <Form.Control placeholder="Calle" name="calle" id="Calle"/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Numero</Form.Label>
                    <Form.Control placeholder="Numero"name="numcalle" id="Numero"/>
                </Form.Group>
            </Form.Group>
            <Button variant="primary" onClick={TrabaUbica}>
              Editar
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <Modal show={show6} onHide={handleClose6}>
          <Modal.Header closeButton>
          <Modal.Title>Nuevo Telefono</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
          <Form.Group as={Col} >
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Telefono" id="Telefono" />
                    </Form.Group>
            <Button variant="primary" onClick={NuevoTel}>
              Editar
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <Modal show={show7} onHide={handleClose7}>
          <Modal.Header closeButton>
          <Modal.Title>Descripcion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
          <Form.Group as={Col} >
                 <Form.Label className="labelForm" >Describete a ti mismo</Form.Label>
                <Form.Control   as="textarea" rows={3} name='Descripcion' id="Descripcion" />
          </Form.Group>
            <Button variant="primary" onClick={NuevoDes}>
              Editar
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <Modal show={show8} onHide={handleClose8}>
          <Modal.Header closeButton>
          <Modal.Title>Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
          <Form.Group as={Col} >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Correo" id="Correo"/>
          </Form.Group>
            <Button variant="primary" onClick={NuevoEmail}>
              Editar
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        <section className="Mai">
                <h1>Editar Datos</h1>
                </section>
                <section>
                <Table striped bordered hover variant="dark" responsive className="ContenidoTAbla">
                  <thead>
                        <tr>
                        <th>Muestras de su trabajo</th>
                        <th>Datos de contacto</th>
                        </tr>
                    </thead>
                    <tbody  className="datos">
                    {TrabajadorFill.map(dataItem =>(
                    <tr>
                        <td key={dataItem.id}>{
                            <Carousel>
                                <Carousel.Item >
                                      <img key={dataItem.Foto1} 
                                      className="d-block w-100 ImagenBanner2"
                                      src={dataItem.Foto1}
                                      alt=""
                                      />
                                </Carousel.Item>
                                <Carousel.Item>
                                      <img key={dataItem.Foto2}
                                      className="d-block w-100 ImagenBanner2"
                                      src={dataItem.Foto2}
                                      alt=""
                                      />
                                </Carousel.Item>
                                <Carousel.Item>
                                      <img key={dataItem.Foto3}
                                      className="d-block w-100 ImagenBanner2"
                                      src={dataItem.Foto3}
                                      alt=""
                                      />
                                </Carousel.Item>
                               
                            </Carousel>}
                            <Button variant="primary" onClick={handleShow3} >
                                  Editar
                                </Button>
                        </td>
                        <tr className="datos" >
                        <th>Nombre</th>    
                        <td key={dataItem.trabajador}>{dataItem.trabajador+dataItem.apellido}</td>
                        <Button variant="primary" onClick={handleShow4} >
                          Editar
                        </Button>
                        <th>Telefono</th>    
                        <td key={dataItem.telefono}>{dataItem.telefono}</td>
                        <Button variant="primary"  onClick={handleShow6}>
                          Editar
                        </Button>
                        </tr>
                        <tr>
                        <th>Ubicación</th>    
                        <td key={dataItem.Estado}>{dataItem.Estado+' '+dataItem.Municipio}</td>
                        <Button variant="primary" onClick={handleShow5} >
                          Editar
                        </Button>
                        <th>Colonia</th>    
                        <td key={dataItem.Colonia}>{dataItem.Colonia}</td>
                        </tr>
                        <tr>
                        <th>Descripción</th>    
                        <td key={dataItem.Descripcion}>{dataItem.Descripcion}</td>
                        <Button variant="primary" onClick={handleShow7} >
                          Editar
                        </Button>
                        <th>email</th>    
                        <td key={dataItem.email}>{dataItem.email} </td>
                        <Button variant="primary" onClick={handleShow8}>
                          Editar
                        </Button>
                        </tr>       
                    </tr>
                    ))
                    }
                    </tbody>
                  </Table>
                </section>
        </div>

    );
}
export default InicioSe;
