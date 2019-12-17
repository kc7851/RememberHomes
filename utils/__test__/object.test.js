import { getKeyArray, getValues, getValuesTruthyWithEtc } from "../object";

test("object get keys with truthy values", () => {
  const obj1 = {
    폴스: false,
    트루: true,
    문자열: "123",
    빈문자열: ""
  };
  expect(getValuesTruthyWithEtc(obj1)).toEqual(["트루"]);

  const obj2 = {
    폴스: false,
    트루: true,
    문자열: "123",
    빈문자열: "",
    기타: ""
  }; 
  expect(getValuesTruthyWithEtc(obj2)).toEqual(["트루"]);

  const obj3 = {
    폴스: false,
    트루: true,
    문자열: "123",
    빈문자열: "",
    기타: "123"
  }; 
  expect(getValuesTruthyWithEtc(obj3)).toEqual(["트루","123"]);
});

test("object get values with keys", () => {
  const includes = {
    폴스: false,
    트루: true,
    문자열: "123",
    빈문자열: ""
  };
  expect(getValues(includes)).toEqual([false, true, "123", ""]);
});

test("object get keys", () => {
  const includes = {
    가스비: false,
    전기세: true,
    기타: "123"
  };
  expect(getKeyArray(includes)).toEqual(["가스비", "전기세", "기타"]);
});

test("test", () => {
  expect(1 + 1).toBe(2);
});
