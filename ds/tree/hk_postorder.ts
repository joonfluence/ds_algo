import { TreeNode } from "./hk_preorder";

function PostOrder(root: TreeNode | null) {
  // 종료조건 : leaf node에 도달했을 경우
  if (root === null) {
    return;
  }

  PostOrder(root.left);
  PostOrder(root.right);
  console.log(root.data);
}

PostOrder({
  data: 5,
  left: { data: 3, left: null, right: null },
  right: { data: 4, left: null, right: null },
});
