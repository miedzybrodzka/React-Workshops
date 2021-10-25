import './App.css';
import Login from './components/Login';
import MenuAppBar from './components/MenuAppBar';
import Selector from './components/Selector';
import Calendar from './components/Calendar';
import Bundle from './components/Bundle';
import Settings from './components/Settings';


function App() {
  return (
    <Selector>
      <Login />
      <MenuAppBar>
        <Calendar />
        <Bundle />
        <Settings />
      </MenuAppBar>
    </Selector>
  );
}

export default App;
