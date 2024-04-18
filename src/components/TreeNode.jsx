import { useState } from 'react';

export const TreeNode = ({ node }) => {
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
};
