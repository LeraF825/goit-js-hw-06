const categories = document.querySelector('#categories')
const categoriesItems = document.querySelectorAll('.item')
console.log(`Number of categories:${categoriesItems.length}`)
categoriesItems.forEach(elem =>{
    const itemTitle = elem.querySelector('h2')
    console.log(`Category: ${itemTitle.textContent}`)
    const itemLength = elem.querySelectorAll('li')
    console.log(`Elements: ${itemLength.length}`)
})