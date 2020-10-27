function randrgb() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    var randrbgcode = 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    document.getElementById("nav-bar").style.backgroundImage = 'linear-gradient(to right, rgba(255, 0, 0, 0), rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', 1))';
}
//call randrgb
randrgb();

function copyCode(colorcode) {
    var copyText = '<input type="text" value="' + colorcode+'" id="myInput">';
    console.log(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
