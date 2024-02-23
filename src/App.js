import React from 'react';
import { Navbar, Container, Nav, Card, CardGroup } from 'react-bootstrap';
import card2 from './assets/card2.jpg';
import card1 from './assets/card1.jpg';
import card3 from './assets/card3.jpg';


function App() {
  return (
    <>
     <React.Fragment>
       <div className="App">
        
       <Navbar bg="dark" variant="dark" style={{ marginBottom: '20px' }}>
            <Container>
              <Navbar.Brand style={{ fontSize: '1.5em', color:'red'}}>Mon Application React</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home" style={{ marginRight: '10px', color:'white' }}>Accueil</Nav.Link>
                <Nav.Link href="#features" style={{ marginRight: '10px', color:'white' }}>Fonctionnalités</Nav.Link>
                <Nav.Link href="#pricing" style={{ marginRight: '10px' , color:'white' }}>Tarification</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
<Container>
<h1 style={{ textAlign:'center', fontStyle:'italic', color:'green' , fontWeight:'bold' }}>En-tête de l'application</h1>
<CardGroup>



<Card style={{margin:'10px'}}>
<Card.Img variant='top' src={card1} style={{width: '100%', height: 'auto'}}/>
<Card.Body style={{ backgroundColor:'mistyrose' ,padding:'20px' ,  }}>

  <Card.Title style={{textDecoration:'underline' , color:'#6a0dad' , textAlign:'center' }}> fauteuil </Card.Title>
  <Card.Text style={{  color: '#404040' }}>
  Découvrez le luxe subtil et contemporain de notre fauteuil vert d'eau. Avec ses pieds en bois de haute qualité, cet élégant fauteuil marie à la perfection style et confort. Ajoutez une touche de fraîcheur et d'élégance à votre espace de vie avec ce choix tendance et intemporel. 
  </Card.Text>
</Card.Body>
</Card>





<Card style={{margin:'10px'}}> 
<Card.Img variant='top' src={card2} style={{width: '92%', height: 'auto'}}/>
<Card.Body style={{ backgroundColor:'mistyrose' ,padding:'20px' }}>

  <Card.Title style={{textDecoration:'underline' , color:'#6a0dad' , textAlign:'center'}}> Vetement</Card.Title>
  <Card.Text style={{ color: '#404040' }}>
  Proposez à votre enfant une tenue chic et joyeuse avec notre ensemble exclusif. Une chemise violette à demi-manches apporte une touche d'élégance, tandis qu'un papillon jaune et violet ajoute une note de fantaisie. Le short en denim blanc, fabriqué à partir d'un tissu haut de gamme et fini avec soin, assure un confort absolu. Offrez à votre petit une tenue aussi confortable que stylée, parfaite pour toutes les aventures de la journée
  </Card.Text>
</Card.Body>
</Card>




<Card style={{margin:'10px'}}>
<Card.Img variant='top' src={card3} style={{width: '77%', height: 'auto'}}/>
<Card.Body style={{ backgroundColor:'mistyrose' ,padding:'20px' ,  }}>

  <Card.Title style={{textDecoration:'underline' , color:'#6a0dad' , textAlign:'center'}}> PC HP </Card.Title>
  <Card.Text style={{  color: '#404040'}}>
  Plongez dans un univers numérique de performance inégalée avec notre PC HP i7. Équipé de la puissance incomparable d'un processeur Intel Core i7, ce bijou technologique offre une expérience informatique sans compromis. Que ce soit pour le travail, le jeu ou le divertissement, laissez-vous transporter par la vitesse, la fluidité et la fiabilité de ce compagnon numérique. Découvrez un monde de possibilités infinies avec le PC HP i7, conçu pour surpasser toutes vos attentes.
  </Card.Text>
</Card.Body>
</Card>



</CardGroup>
</Container>

      </div>
      </React.Fragment>
    </>
  );
}

export default App;



