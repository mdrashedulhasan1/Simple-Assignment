document.getElementById('input-value').addEventListener('change', function () {
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    console.log(inputValue);
    if (inputValue < 0) {
        const Text = document.getElementById('text');
        Text.innerText = "enter a positive value";
    }
    else if (inputValue % 2 == 0) {
        const Text = document.getElementById('text');
        Text.innerText = `${parseInt(inputValue) + 2}, ${parseInt(inputValue) + 4}, ${parseInt(inputValue) + 6}`
    }
    else if (inputValue % 2 != 0) {
        const Text = document.getElementById('text');
        Text.innerText = `${parseInt(inputValue) + 2}, ${parseInt(inputValue) + 4}, ${parseInt(inputValue) + 6}`
    }
})