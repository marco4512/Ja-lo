import React ,{Fragment,useState,useEffect,Componet,useMemo} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Axios from 'axios'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
const Informatica =()=> {
    const handleShow = () => {setShow(true);} 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   
    const [ListaImagenes, setListaImagenes] = useState([]);
    const[term,setTerm]=useState("");
    useEffect(() => {
        (async () => {
          const response = await Axios({
              method: 'get',
              url: 'https://ja-lo.herokuapp.com/AllTrabajadorInformatica'
            })
            .then(response => {
                setListaImagenes(response.data);

            })
            
        })();
      }, []);
      const [Trabajador, setTrabajador] = useState([]);

      const Tel = async (x) =>{
        console.log("Cargando Datos");
        console.log("Telefono:",x);                         
          await Axios({
            method: 'get',
            url: 'https://ja-lo.herokuapp.com//TrabajadorCard?telefono='+x,
          })
          .then(response=>{
            setTrabajador(response.data);
            setShow(true);
          })
          .catch(error => {
            
            console.log('Error Login', error )
            alert('Error Datos Incompletos',);
          }
          )
           }
    return (
    <div className="Con">
        <section className="Mai">
        <h1>Informatica</h1>
        <Form inline className="busqueda">
         <Form.Group as ={Col}>
         <FormControl type="text" placeholder="Buscar"
         onChange={e=>setTerm(e.target.value)}
         id="idFiltro"/>
           
         </Form.Group>
          </Form>
         </section>
    
    {ListaImagenes.filter((dataItem)=> {
     if(term == ""){
         return dataItem
     }else if(dataItem.Colonia.toLowerCase().includes(term.toLowerCase())){
         return dataItem
     }else if(dataItem.trabajador.toLowerCase().includes(term.toLowerCase())){
        return dataItem  
     }else if(dataItem.Municipio.toLowerCase().includes(term.toLowerCase())){
        return dataItem  
     }else if(dataItem.apellido.toLowerCase().includes(term.toLowerCase())){
        return dataItem  
     }
        
     
    }).map(dataItem =>(
        
        <Card style={{ width: '18rem' }} className="VistaCard">
        <Card.Img variant="top" src={dataItem.Foto1}></Card.Img>
        <Card.Body>
        <Card.Title className="colorCard" key={dataItem.trabajador} >{dataItem.trabajador+' '+dataItem.apellido}</Card.Title>
        <Card.Text  className="colorCard" key={dataItem.Estado} >Ubicacion: {' '+dataItem.Estado+','+dataItem.Municipio}</Card.Text>
        <Card.Text  className="colorCard" key={dataItem.Colonia}>Colonia: {' '+dataItem.Colonia} </Card.Text>
        <Card.Text  className="colorCard" key={dataItem.telefono} id="idTelefono">telefono: {' '+dataItem.telefono} </Card.Text>
        <Button variant="primary" onClick={Tel(dataItem.telefono)}>Ver mas ...</Button>
        </Card.Body>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Datos de: {' '+dataItem.trabajador} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
          <Form.Group >
              <Form.Label>Nombre:</Form.Label>
              <Form.Label>Telefono:</Form.Label>
              <Form.Label>Comentarios:</Form.Label>
          </Form.Group>
          <Form.Group >
              <Form.Label>Ubicacion</Form.Label>
          </Form.Group>
          <Button variant="primary">
              Iniciar
          </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        </Card>
         
     ))
      
    }
       

    </div>
    );
}
export default Informatica;