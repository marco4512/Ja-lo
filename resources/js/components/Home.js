import React ,{Fragment,useState,useEffect,Componet} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Axios from 'axios'
import {useHistory,Link} from 'react-router-dom';
import Caro from './Carrusel';


const Home =()=> {

    return (
        <div>
         <div className="Con">
                <section className="Mai">
                   <Caro></Caro>
                </section>
            </div>
          <div className="Con">
          <section className="Mai">
           <img src="https://ja-lo.herokuapp.com/images/ComoFun.png" className="Ima"></img>
            </section>
        </div>
        </div>
    );
}
export default Home;
