import { TreeNode } from "./preorder";

function InOrder(root: TreeNode | null) {
  // 종료조건 : leaf node에 도달했을 경우
  if (root === null) {
    return;
  }

  InOrder(root.left);
  console.log(root.data);
  InOrder(root.right);
}

InOrder({
  data: 5,
  left: { data: 3, left: null, right: null },
  right: { data: 4, left: null, right: null },
});
