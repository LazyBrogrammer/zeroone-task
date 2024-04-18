import { useState } from 'react';

export const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-300 tree">
      <div className='hover:bg-slate-400 p-2' onClick={handleToggle}>
        {node.children && (
          <i
            className={`${
              isOpen ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-right'
            }`}
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
};
