export const getKeyArray = object => {
  return Object.keys(object);
};

export const getValues = object => {
  return getKeyArray(object).map(key => object[key]);
};

export const getValuesTruthyWithEtc = object => {
  if (object["기타"]) {
    return getKeyArray(object)
      .filter(key => object[key] == true)
      .concat(object["기타"]);
  } else {
    return getKeyArray(object).filter(key => object[key] == true);
  }
};
