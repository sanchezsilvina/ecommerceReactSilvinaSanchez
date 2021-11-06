import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


const listproductos= [
    {
       "id": 1,
       "titulo": "Monstera",
       "descripcion": "Monstera con Maceta blanca premium planta",
       "precio":2500,
       'urlpicture':'FotosItems/Monstera.png',
       'stock':5
   },
    {
        "id": 2,
        "titulo": "Areca",
        "descripcion": "Areca 1 metro con maceta blanca mas portamaceta de madera",
        "precio":4300,
        'urlpicture':'FotosItems/Areca.png',
        'stock':20
    },
    {
       "id": 3,
       "titulo": "Alocasia",
       "descripcion": "Alocasia Estilo Tropical con maceta blanca o negra ideal",
       "precio":2600,
       'urlpicture':'FotosItems/Alocasia.png',
       'stock':10
   },
    {
       "id": 4,
       "titulo": "Aglaonema",
       "descripcion": "Aglaonema de 80 cm de altura con maseta blanca",
       "precio":1000,
       'urlpicture':'FotosItems/Aglaonema.png',
       'stock':2
   },
    {
        "id": 5,
        "titulo": "Palmera",
        "descripcion": "Palmera natural 70cm altura aproximada con maceta blanca",
        "precio":1500,
        'urlpicture':'FotosItems/Areca.png',
        'stock':1
    },
    {
        "id": 6,
        "titulo": "Strelitzia",
        "descripcion": "Strelitzia Reginae DECO Estilo Tropical",
        "precio":3600,
        'urlpicture':'FotosItems/strelitzia.png',
        'stock':50
    }
    
    ]
const getItem = new Promise ((resolve,reject) => {
    setInterval(() => {
        resolve(listproductos)  
    }, 2000);
})

export const ItemDetailContainer=()=>
{
    const [Productos, setProductos] = useState([])

    getItem.then(res =>  setProductos(res))

    return (
            <div className="container align-center">
                {Productos.length> 0 ?  <ItemDetail item = {Productos[1]}/>:<h1>no existen productos a mostrar</h1>}
            </div>
    );
}