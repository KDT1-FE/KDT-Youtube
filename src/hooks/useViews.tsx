export const getViewCount = (number: number) => {
  const inputNumber: number = number;
  const unitWords = ['회', '만회', '억회', '조회'];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  let resultArray = [];
  let resultString = '';

  for (let i = 0; i < splitCount; i++) {
    let unitResult: number = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }

  let numStr = '';
  for (const el of resultString) {
    if (el !== '회') {
      numStr += el;
    } else {
      numStr += el;
      break;
    }
  }

  return numStr;

  // let inputNumber: number = number < 0 ? 0 : number;
  // let unitWords = ['', '천', '만', '억', '조'];
  // let splitUnit = 1000;
  // let splitCount = unitWords.length;
  // let resultArray = [];
  // let resultString = '';

  // for (let i = 0; i < splitCount; i++) {
  //   let unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
  //   unitResult = Math.floor(unitResult);
  //   if (unitResult > 0) {
  //     resultArray.push(unitResult);
  //   }
  // }
  // for (let i = 0; i < resultArray.length; i++) {
  //   if (!resultArray[i]) continue;
  //   resultString = String(resultArray[i]) + unitWords[0] + resultString;
  // }

  // return resultString;
};
