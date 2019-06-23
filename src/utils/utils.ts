import { isWeChat } from './isX'

export const getQueryString = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return decodeURIComponent(r[2])
  }
  return null
}

export const setDocTitle = (title: string) => {
  document.title = title
  if (isWeChat()) {
    const iframe = document.createElement('iframe')
    iframe.src = '/favicon.ico'
    iframe.style.visibility = 'hidden'
    iframe.style.width = '1px'
    iframe.style.height = '1px'
    iframe.onload = () => {
      setTimeout(() => {
        document.body.removeChild(iframe)
      }, 0)
    }
    document.body.appendChild(iframe)
  }
}
