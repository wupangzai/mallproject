export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer)  clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}




        // debounce防抖函数,将要执行的函数，传入debounce里，
    // 在delay时间里，调用非常频繁的时候，就使用新生成的函数，
    // 而新生成的 函数，不会非常频繁的调用，如果下一次执行的非常快，那么将上一次的取消掉