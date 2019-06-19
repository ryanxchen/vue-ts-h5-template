import { formatDate as utilFormatDate } from '@/utils'

export const formatDate = (datatime: Date | number | string, fm: string = 'yyyy-MM-dd hh:mm:ss') => {
  if (!datatime) return datatime
  return utilFormatDate(datatime, fm)
}
