/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&]([^?&]+)=([^?&]+)/g;
  while (reg.exec(url)) {
    let key = decodeURIComponent(RegExp.$1);
    let val = decodeURIComponent(RegExp.$2);
    obj[key] = val;
  }
  return obj;
};
