export default function(func, ms) {
  let isThrottled
  let savedArgs
  let timer

  function wrapper(...arg) {

    if (isThrottled) {
      clearTimeout(timer)
    }

    savedArgs = arg
    isThrottled = true

    timer = setTimeout(() => {
      isThrottled = false
      func.apply(this, savedArgs)
      savedArgs = timer = null
    }, ms)
  }

  return wrapper;
}