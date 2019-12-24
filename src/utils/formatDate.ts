export function formatDate (
  datetime: Date | number | string,
  fmt: string
): string {
  if (!datetime) return ''

  const date: Date = new Date(
    typeof datetime === 'string'
      ? datetime.replace(/-/g, '/')
      : datetime
  )

  function padLeftZero (str: string) {
    return ('00' + str).substr(str.length)
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  const o: any = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str: string = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }

  return fmt
}
