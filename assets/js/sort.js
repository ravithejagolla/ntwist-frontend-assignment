function sortList() {
      const list = document.getElementById('nameList');
      const items = Array.from(list.getElementsByTagName('li'));

      items.sort((a, b) => a.textContent.localeCompare(b.textContent));  //sort on asending order

      // Remove current list items
      list.innerHTML = '';

      // Append sorted items
      items.forEach(item => list.appendChild(item));
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
  }