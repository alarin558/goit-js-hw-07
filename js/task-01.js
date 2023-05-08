const arrayCategories = document.querySelectorAll('.item')
console.log('Number of categories: ', arrayCategories.length)
console.log('\n')
arrayCategories.forEach((item, num) => {
  const categoryName = item.querySelector('h2').textContent
  console.log('Category:', categoryName)
  const elemetsInCategory = item.querySelectorAll('li').length
  console.log('Elements: ', elemetsInCategory)
  console.log('\n')
})
