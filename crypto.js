function checkCode1() {
    const codeInput = document.getElementById('codeInput1').value.toLowerCase();
    if (codeInput.includes('fractionated') && codeInput.includes('morse')) {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
    } else {
        alert('Incorrect. Try again!');
}
}

function checkCode2() {
    const codeInput2 = document.getElementById('codeInput2').value.toLowerCase();
    if (codeInput2.includes('porta')) {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    } else {
        alert('Incorrect. Try again!');
    }
}
