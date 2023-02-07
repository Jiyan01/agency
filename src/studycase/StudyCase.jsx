import { cards } from '../works/Works'
import { useParams } from 'react-router-dom';

function StudyCase() {
  const { title } = useParams();
  const studyCaseTitle = title;
  const studyCase = Object.values(cards).find(item => item.title === studyCaseTitle);
  return (
    <div>
      <h2>{studyCase.title}</h2>
      <p>{studyCase.description}</p>
    </div>
  );
}

export default StudyCase