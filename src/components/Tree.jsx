import { TreeNode } from './TreeNode';
export const Tree = ({ data }) => {
  return (
    <div className="bg-slate-300 mx-auto">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};
