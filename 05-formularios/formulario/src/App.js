import './App.css';
import Form from './components/Form/Form';

function App() {
  return (
    <div className='App'>
      <h2>Formulario</h2>
      <Form user={{
        name: "Jose",
        email: 'Jose@gmail.com',
        bio: 'Olá sou Jose',
        role: 'admin'
      }} />
    </div>
  );
}

export default App;
