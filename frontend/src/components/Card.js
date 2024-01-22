import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';

const Card = ({ flashcard, deleteHandler }) => {
  const [showDefinition, setShowDefinition] = useState(false);

  return (
    <div className="card">
      <div className="term">{flashcard.term}</div>
      {showDefinition ? (
        <div
          className="definition"
          onClick={() => {
            setShowDefinition(!showDefinition);
          }}
        >
          {flashcard.definition}
        </div>
      ) : (
        <div
          className="hidden-definition"
          onClick={() => {
            setShowDefinition(!showDefinition);
          }}
        >
          click to reveal
        </div>
      )}
      <FontAwesomeIcon
        onClick={() => {
          deleteHandler(flashcard._id);
        }}
        className="fa-icon"
        icon={icon({ name: 'trash-can', family: 'classic', style: 'regular' })}
      />
    </div>
  );
};

export default Card;
