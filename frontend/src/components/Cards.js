import Card from './Card';
import '../styles/Cards.css';

const Cards = ({ flashcards }) => {
  return (
    <div className="cards">
      {flashcards.map((flashcard) => (
        <Card className="card" key={flashcard.term} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default Cards;