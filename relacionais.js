console.log('01) ','1' == 1 )//nesse caso dá true por que o javascript entende que são dois número "1"
console.log('02) ','1' === 1 )//comparando estritamente os dois valores são diferentes, um e number o outro string.
console.log('03) ','3' != 3 )
console.log('04) ','3' !== 3 )
console.log('05) ', 3 < 2)
console.log('06) ', 3 > 2)
console.log('08) ', 3 <= 2)
console.log('09) ', 3 >= 2)

const d1 = new Date(0)//esse zero representa a data marco zero que seria 1 jan de 1970.
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime)

console.log('12)', undefined == null)
console.log('13)', undefined === null)
