let btnOpen = document.getElementById('btnOpen');
btnClose = document.getElementById('btnClose');
exampleModal = document.getElementById('exampleModal');

const closeBtn = n => {
    btnOpen.style = "display: none;";
}

const remoteBtn = n => {
    btnOpen.style = "display: block;";
}

btnOpen.addEventListener('click', closeBtn);
btnClose.addEventListener('click', remoteBtn);
exampleModal.addEventListener('click', remoteBtn);

AOS.init();