const color = document.querySelectorAll('.color');
const colorHex = document.querySelectorAll('#colorHex');
let href = window.location.href;
color[0].addEventListener('click', () => {
    let old_div = document.querySelector('.alert');
     if (old_div){
     old_div.parentNode.removeChild(old_div);
    };
    let targetInput = colorHex[0];
    targetInput.select();
    document.execCommand('copy');
    notification('Color ' + colorHex[0].value +  ' copied to your Clipboard');

});
color[1].addEventListener('click', () => {
    let old_div = document.querySelector('.alert');
     if (old_div){
     old_div.parentNode.removeChild(old_div);
    };
    let targetInput = colorHex[1];
    targetInput.select();
    document.execCommand('copy');
    notification('Color ' + colorHex[1].value +  ' copied to your Clipboard');

});
color[2].addEventListener('click', () => {
    let old_div = document.querySelector('.alert');
     if (old_div){
     old_div.parentNode.removeChild(old_div);
    };
    let targetInput = colorHex[2];
    targetInput.select();
    document.execCommand('copy');
    notification('Color ' + colorHex[2].value +  ' copied to your Clipboard');
});
color[3].addEventListener('click', () => {
    let old_div = document.querySelector('.alert');
     if (old_div){
     old_div.parentNode.removeChild(old_div);
    };
    let targetInput = colorHex[3];
    targetInput.select();
    document.execCommand('copy');
    notification('Color ' + colorHex[3].value +  ' copied to your Clipboard');

});

const input = document.querySelector('#link');
input.value = window.location.href;
function copyURL() {
    let url = input;
    url.select();
    document.execCommand('copy');
    notification("Copied the page link!");
};
input.addEventListener('click', () => {
    let url = input;
    url.select();
    document.execCommand('copy');
    notification("Copied the page link!");
})
function notification(msg) {
    const old_div = document.querySelector('.alert');
    if(old_div) {
        old_div.parentNode.removeChild(old_div);
    };
    const alert = document.createElement('div');
    alert.className = 'alert';
    alert.innerHTML = msg;
    document.body.appendChild(alert);
    setTimeout(() => alert.classList.add('active'), 1)
    setTimeout(() => alert.classList.remove('active'), 1000);
}

function openShare() {
    const shareModal = document.querySelector('.modal-share');
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
    shareModal.classList.add('active');
    document.body.style.overflow = 'hidden';

}

function closeShare() {
    const shareModal = document.querySelector('.modal-share');
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
    shareModal.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = 'visible';
}