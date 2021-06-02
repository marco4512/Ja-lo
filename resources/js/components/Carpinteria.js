import React ,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Axios from 'axios'
import Table from 'react-bootstrap/Table';
import URL from './url';
const Carpinteria =()=> {
    const [ListaImagenes, setListaImagenes] = useState([]);
    const[term,setTerm]=useState("");
    useEffect(() => {
        (async () => {
            
          const response = await Axios({
              method: 'get',
              url:'http://localhost/ja-las/public/AllTrabajador'
            })
            .then(response => {
                setListaImagenes(response.data);
            })
        })();
      }, []);
    return (
    <div className="Con">
        <section className="Mai">
        <h1>Carpinteria</h1>
        <Form inline className="busqueda">
         <Form.Group as ={Col}>
         <FormControl type="text" placeholder="Buscar"
         onChange={e=>setTerm(e.target.value)}
         />
         </Form.Group>
          </Form>
         </section>
  <Table striped bordered hover variant="dark" responsive className="ContenidoTAbla">
  <thead>
        <tr>
        <th>Muestras de su trabajo</th>
        <th>Datos de contacto</th>
        </tr>
    </thead>
    <tbody  className="datos">
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
        </td>
        <tr className="datos" >
        <th>Nombre</th>    
        <td key={dataItem.trabajador}>{dataItem.trabajador+' '+dataItem.apellido}</td>
        <th>Telefono</th>    
        <td key={dataItem.telefono}>{dataItem.telefono}</td>
        </tr>
        <tr>
        <th>Ubicación</th>    
        <td key={dataItem.Estado}>{dataItem.Estado+' '+dataItem.Municipio}</td>
        <th>Colonia</th>    
        <td key={dataItem.Colonia}>{dataItem.Colonia}</td>
        </tr>
        <tr>
        <th>Descripción</th>    
        <td key={dataItem.Descripcion}>{dataItem.Descripcion}</td>
        <th>email</th>    
        <td key={dataItem.email}>{dataItem.email}</td>
        </tr>       
    </tr>
     ))
    }
    </tbody>
</Table>
    </div>
    );
}
export default Carpinteria;