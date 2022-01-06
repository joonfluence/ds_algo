export type TreeNode = {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

function PreOrder(root: TreeNode | null) {
  // 종료조건 : leaf node에 도달했을 경우
  if (root === null) {
    return;
  }

  console.log(root.data);
  PreOrder(root.left);
  PreOrder(root.right);
}

PreOrder({
  data: 5,
  left: { data: 3, left: null, right: null },
  right: { data: 4, left: null, right: null },
});
