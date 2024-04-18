import { TreeNode } from "./TreeNode";
export const Tree =({ data }) => {
  return (
    <div>
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
}
