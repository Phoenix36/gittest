function displayItem(itemId) {
    // hide all items
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    // display selected item
    var item = document.getElementById(itemId);
    item.style.display = "block";
  }
  
  