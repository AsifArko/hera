export const  capitalize = (data: string) => {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

export const processTableHeader = (header: string) => {
  if (header === 'createdAt') header = 'created at'
  if (header === 'updatedAt') header = 'updated at'
  if (header === 'buyingRate') header= 'buying rate'
  if (header === 'sellingRate') header = 'selling rate'
  if (header === 'thumbnail') header = 'image'
  return header
}