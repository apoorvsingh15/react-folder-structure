import './App.css';
import Folder from './components/Folder';
import folderStructure from './data/folderStructure';
function App() {
  return (
    <div>
      <Folder folderStructure={folderStructure} />
    </div>
  );
}

export default App;
