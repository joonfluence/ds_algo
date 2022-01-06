function truthCheck(collection: Record<string, string>[], pre: string) {
  let result = true;
  collection.map((item) => {
    // 해당 필드가 없는 경우
    if (!item.hasOwnProperty(pre)) {
      result = false;
    } else {
      // 필드는 있지만, 해당 필드 값이 falsy인 경우
      if(!item[pre]){
        result = false;
      }
    }
  });
  return result;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);
