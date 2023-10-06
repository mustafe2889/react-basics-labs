import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" todo="Empty Dishwasher" />        
      <Task title="Laundry" deadline="Tomorrow" todo="Fold laundry and put away" />
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;