// debounce防抖函数,将要执行的函数，传入debounce里，
// 在delay时间里，调用非常频繁的时候，就使用新生成的函数，
// 而新生成的 函数，不会非常频繁的调用，如果下一次执行的非常快，那么将上一次的取消掉
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer)  clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 时间戳格式化
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function formateDate(date, fmt){
  // 获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  // 获取
  // M+ -> 
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

