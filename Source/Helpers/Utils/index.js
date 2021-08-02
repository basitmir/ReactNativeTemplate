
export const AppUtils = {
  mergeAndRemoveDuplicate: (data = [], selectedList = []) => {
    let hash = {};

    for (let i of data.concat(selectedList)) {
      if (!hash[i]) {
        hash[i.name] = i;
      }
    }

    let newArr = [];

    for (let i in hash) {
      newArr.push(hash[i])
    }
    return newArr
  }
}