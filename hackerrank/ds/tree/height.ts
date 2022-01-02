import { TreeNode } from "./preorder";

function height(root: TreeNode | null, heightNum: number): number {
  if (root === null) {
    return heightNum - 1;
  }

  return Math.max(
    height(root.left, heightNum + 1),
    height(root.right, heightNum + 1)
  );
}

console.log(
  height(
    {
      data: 5,
      left: {
        data: 3,
        left: {
          data: 1,
          left: { data: 0, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: { data: 4, left: null, right: null },
    },
    0
  )
);
