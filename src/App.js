import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

const App = () => {
  const cardWithImage = {
    title: 'Card with Image',
    image: 'https://via.placeholder.com/150',
    description: 'This is a card with an image.',
    buttonText: 'Click me',
  };

  const cardWithoutImage = {
    title: 'Card without Image',
    description: 'This is a card without an image.',
    buttonText: 'Click me',
  };

  return (
    <div className="container my-5">
      <Card
        title={cardWithImage.title}
        description={cardWithImage.description}
        buttonText={cardWithImage.buttonText}
      >
        <img src={cardWithImage.image} className="img-fluid rounded-start" alt={cardWithImage.title} />
      </Card>
      <Card
        title={cardWithoutImage.title}
        description={cardWithoutImage.description}
        buttonText={cardWithoutImage.buttonText}
      />
    </div>
  );
};

export default App;
