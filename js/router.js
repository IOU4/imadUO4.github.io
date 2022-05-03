const path = location.pathname
const query = location.search

const loadPage = async (file) => {
  const html = await fetch(file).then(res => res.text()).catch(err => console.error(err))
  document.body.innerHTML = html
}

switch (path) {
  case '/about':
    loadPage('../html/about.html')
    document.title = 'About'
    break;
  case '/blog':
    loadPage('../html/blog.html')
    document.title = 'Blog'
    break;
  default:
    loadPage('../html/home.html')
    document.title = 'Home'
}


