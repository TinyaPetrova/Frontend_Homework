const names = ['Семён', 'Иван', 'Пётр', 'Татьяна']
const ages = [18, 27, 74, 34]
const namesAndAges = []

for (let i = 0; i < names.length; i++) {
    namesAndAges[i] = `${names[i]} ${ages[i]} лет/года`
}

console.log(namesAndAges);