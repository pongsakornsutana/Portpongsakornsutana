function showPopup(imageSrc, description) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popupImage");
    var popupDescription = document.getElementById("popupDescription");
  
    popup.style.display = "block";
    popupImage.src = imageSrc;
    popupDescription.innerHTML = description;
  }
  
  function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  