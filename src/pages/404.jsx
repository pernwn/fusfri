
import { Link } from 'react-router-dom';
import "../styles/rin.css"
import { FilledBtn} from '../components/buttons';

export default function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>404 - Side ikke fundet</h1>
        <p>Beklager, den side du leder efter, kunne ikke findes.</p>
        <p>Gå tilbage til <FilledBtn page="/" name="forsiden"/>.</p>
        <iframe frameBorder={0} src="https://lottie.host/embed/5d9f8adc-b487-4e51-947a-54c80f9a1bc0/ByKUzY0QSt.json"></iframe>
      </div>
    </div>
  );
}
