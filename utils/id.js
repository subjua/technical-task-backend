const getRandomNumber = (start = 0, end = 100) => Math.floor((Math.random() * end) + start)

const getUniqId = () => {
  const dict = 'qwertyuiopasdfghjklzxcvbnm1234567890'
  const dateNow = Date.now().toString()
  const idFromDate = dateNow.split('').reduce((acc, curr) => acc + dict[curr], '')
  const randomId = Array(23).fill().reduce((acc, curr) => acc + dict[getRandomNumber(0, dict.length)], '')
  
  return randomId + idFromDate
}

module.exports = {
  getUniqId
}