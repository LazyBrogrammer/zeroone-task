// import components
import { TableHead } from './components/TableHead';
import { TableBody } from './components/TableBody';
import { Tree } from './components/Tree';

// import styles
import './App.css';

// imoprt data
import { treeData } from './data/treeData';

export default function App() {
  return (
    <>
      <table>
        <TableHead />
        <TableBody />
      </table>
      <br />
      <br />
      <Tree data={treeData} />
    </>
  );
}
