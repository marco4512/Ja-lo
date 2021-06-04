import React ,{Fragment,useState,useEffect,Componet,useMemo} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Axios from 'axios'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card'
const Informatica =()=> {
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
        <Card.Title key={dataItem.trabajador} >{dataItem.trabajador+' '+dataItem.apellido}</Card.Title>
        <Card.Text key={dataItem.Estado} >Ubicacion: {' '+dataItem.Estado+','+dataItem.Municipio}</Card.Text>
        <Card.Text key={dataItem.Colonia}>Colonia: {+' '+dataItem.Colonia} </Card.Text>
        <Button variant="primary">Ver mas ...</Button>
        </Card.Body>
        </Card>
     ))
    }

    </div>
    );
}
export default Informatica;