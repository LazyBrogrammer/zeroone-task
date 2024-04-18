import { useState } from 'react';

export const TreeNode = ({ node, isRoot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-200 p-1">
      <div className='hover:bg-slate-300' onClick={handleToggle}>
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
        <div className="bg-slate-500 hover:bg-slate-300" style={{ marginLeft: 20 }}>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};
