let generateList = function generateList(arr) {
    let ul = document.createElement('ul');
   
    arr.forEach(function(el) {
      let li = document.createElement('li');
      let childElement;
   
      if (Array.isArray(el)) {
        childElement = generateList(el);
      } else {
        childElement = document.createTextNode(el)
      }
   
      li.appendChild(childElement);
      ul.appendChild(li);
    })
   
    return ul;
  }
   
  document.querySelector('.generate_list').appendChild(generateList([1, 2, 3]))
  document.querySelector('.generate_list').appendChild(generateList([1, 2, [1.1, 1.2, ['1.2.1', '1.2.2'], 1.3], 3]))
  