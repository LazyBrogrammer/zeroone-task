import { TreeNode } from './TreeNode';
export const Tree = ({ data }) => {
  return (
    <div className="tree">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};
