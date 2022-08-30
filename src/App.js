
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  
  return (
   
    <div className="App">
       <NavBar />
       <header className="App-header">
        <ItemListContainer nombresProductos ='Remera Azul' contenido = 'Esta remera esta hecha por nosotros y actualmente esta en venta!'>
        <ItemCount stock='10' initial='1'/>

        </ItemListContainer>
 

        </header>
        

    </div>
  );
}

export default App;
