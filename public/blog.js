axios.get('/posts')
  .then(post => {
    let postTitleElem = document.createElement('li')
    postTitleElem.className = 'list-group-item btn btn-outline-primary'
    postTitleElem.textContent = post.title

    document.getElementById(titles).append(postTitleElem)
  })
  .catch(err => console.log(err))
  
  
  