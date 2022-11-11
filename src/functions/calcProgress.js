const calcProgress = (data) => {
  const checkEmptyArr = (arr) => {
    let result = false;
    let tArr = [];

    for (let item of arr) {
      tArr.push(...Object.values(item));
    }

    tArr = [].concat(
      ...tArr.map(function (elem) {
        if (typeof elem === "object" && !Array.isArray(elem) && elem !== null) {
          return Object.values(elem);
        } else {
          return elem;
        }
      })
    );

    result = tArr.includes("", 0) || tArr.includes(undefined, 0);
    return result;
  };

  let progress = 0;
  for (let key in data) {
    // Строки
    if (typeof data[key] === "string") {
      if (data[key] !== "") {
        progress = Math.ceil(progress + (1 / Object.keys(data).length) * 100);
        if (progress > 100) {
          progress = 100;
        }
      }
    }

    // Массивы
    if (Array.isArray(data[key])) {
      if (data[key].length !== 0 && !checkEmptyArr(data[key])) {
        progress = Math.ceil(progress + (1 / Object.keys(data).length) * 100);
        if (progress > 100) {
          progress = 100;
        }
      }
    }

    // Объекты
    if (typeof data[key] === "object" && !Array.isArray(data[key])) {
      const itemsNum = Object.keys(data[key]).length;
      let i = 0;
      for (let item of Object.values(data[key])) {
        if (item || item === "") {
          i++;
        }
      }
      if (i === itemsNum) {
        progress = Math.ceil(progress + (1 / Object.keys(data).length) * 100);
        if (progress > 100) {
          progress = 100;
        }
      }
    }
  }

  return progress;
};

export default calcProgress;
