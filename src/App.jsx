// import components
import { TableHead } from './components/TableHead';
import { TableBody } from './components/TableBody';
// import { TreeCollapse } from './components/TreeCollaps';
import { treeData } from './data/treeData';

// import styles
import './App.css';

import { useState } from 'react';

function TreeNode({ node }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-60 bg-slate-100 ">
      <div
        onClick={handleToggle}
        style={{ display: 'flex', alignItems: 'center' }}
        className="border-l-4 border-transparent hover:border-l-4 hover:border-cyan-600"
      >
        {node.children && (
          <i
            className={`${
              isOpen ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-right'
            }`}
            style={{ marginRight: 5 }}
          ></i>
        )}
        {node.name}
      </div>
      {isOpen && node.children && (
        <div style={{ marginLeft: 20 }}>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function Tree({ data }) {
  return (
    <div>
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
}

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
