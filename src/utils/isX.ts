// 微信环境
export const isWeChat = () => (/micromessenger/i).test(navigator.userAgent)

// 支付宝app环境
export const isALi = () => (/(alipay)|(aliapp)/i).test(navigator.userAgent)

// 手机号码
export const isMobile = (phone: string) => /^1(3|4|5|6|7|8|9)[0-9]\d{8}$/.test(phone)

// 座机号码
export const isPhone = (phone: string) => /^(([0+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(phone)

// 组织机构代码
export const isOrgCode = (code: string) => /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]$/.test(code) || /^[a-zA-Z0-9]{9}$/.test(code)

// vin码/车架号
export const isVin = (code: string) => /^[0-9A-Z]{17}$/.test(code)

// 发动机号
export const isEngineNo = (code: string) => /^[0-9a-zA-Z]+$/i.test(code)

// 护照
export const isPassport = (num: any) => /^[a-zA-Z0-9]{7,18}$/.test(num)

// 营业执照
export const isBussinessLicense = (num: string) => /^[A-Za-z0-9]{1,18}$/.test(num)

// 银行卡号
export const isBankCard = (num: any) => /^\d{16}|\d{19}$/.test(num)

// 邮箱
export const isEmail = (mail: any) => /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(mail)

// 用户名
export const isUserName = (name: string) => /^[\u4E00-\u9FA5A-Za-z\·\•\(\)\（\）\:\： ]+$/.test(name)

// 车牌
// tslint:disable-next-line:max-line-length
export const isCarLicense = (num: string) => /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6,7}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(num)

// 身份证号码 非严格
// tslint:disable-next-line:max-line-length
export const isID = (num: string) => /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/.test(num)

// 身份证号码 严格
export const isIdNo = (ID: any) => {
  if (typeof ID !== 'string') return false
  const city = {
    11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林',
    23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西',
    37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南',
    50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃',
    63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外'
  }
  const birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2))
  const d = new Date(birthday)
  const newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate())
  const time = d.getTime()
  const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  let sum = 0
  let i: number
  let residue
  if (!/^\d{17}(\d|x)$/i.test(ID)) return false
  if ((Object.keys(city)).indexOf(ID.substr(0, 2) + '') === -1) return false
  if (time >= +new Date() || birthday !== newBirthday) return false
  for (i = 0; i < 17; i++) {
    sum += +(ID.substr(i, 1)) * arrInt[i]
  }
  residue = arrCh[sum % 11]
  if (residue !== ID.substr(17, 1)) return false
  return true
}
