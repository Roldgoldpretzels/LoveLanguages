import { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import CreditCardModal from './components/CreditCardModal';
import { QUESTIONS } from './data/questions';

const initialScores = { words: 0, acts: 0, gifts: 0, time: 0, touch: 0 };

export default function App() {
  const [screen, setScreen]             = useState('start');
  const [currentQ, setCurrentQ]         = useState(0);
  const [scores, setScores]             = useState(initialScores);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [hasShownCard, setHasShownCard] = useState(false);

  function handleStart() {
    setScreen('quiz');
    setCurrentQ(0);
    setScores(initialScores);
    setHasShownCard(false);
    setShowCreditCard(false);
  }

  function handleAnswer(lang) {
    const next = { ...scores, [lang]: scores[lang] + 1 };
    setScores(next);
    if (currentQ + 1 >= QUESTIONS.length) {
      setScreen('results');
    } else {
      const nextQ = currentQ + 1;
      setCurrentQ(nextQ);
      // Show the joke modal exactly once at the halfway point
      if (nextQ === 15 && !hasShownCard) {
        setHasShownCard(true);
        setTimeout(() => setShowCreditCard(true), 300);
      }
    }
  }

  function handleRestart() {
    setScreen('start');
    setShowCreditCard(false);
  }

  return (
    <>
      {screen === 'start'   && <StartScreen onStart={handleStart} />}
      {screen === 'quiz'    && <QuizScreen question={QUESTIONS[currentQ]} index={currentQ} total={QUESTIONS.length} onAnswer={handleAnswer} />}
      {screen === 'results' && <ResultsScreen scores={scores} onRestart={handleRestart} />}
      {showCreditCard && <CreditCardModal onDismiss={() => setShowCreditCard(false)} />}
    </>
  );
}
