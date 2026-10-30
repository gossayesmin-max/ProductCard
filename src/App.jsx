
import './App.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

function App() {
  

  return (
    <>
       <Container className="main-container">

      <Card className="product-card">

        <Image />

        <Card.Body>

          <Name />

          <Price />

          <Description />

        </Card.Body>

      </Card>

    </Container>
    </>
  )
}

export default App
