function openModal(imageSrc, caption) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalCaption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalCaption.innerHTML = caption;
}

var closeModal = document.querySelector('.close');
closeModal.onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}


function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// ปิดโมดัลเมื่อคลิกนอกพื้นที่โมดัล
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
};
