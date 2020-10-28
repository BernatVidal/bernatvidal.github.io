


function copyText(str) {
    // Create new element
    var txt = document.createElement('textarea');
    // Set value (string to be copied)
    txt.value = str;
    // Set non-editable to avoid focus and move outside of view
    txt.setAttribute('readonly', '');
    txt.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(txt);
    // Select text inside element
    txt.select();
    // Copy text to clipboard and alert user
    document.execCommand('copy');
    alert("Mail copiado en el portapapeles: " + txt.value);
    // Remove temporary element
    document.body.removeChild(txt);
}