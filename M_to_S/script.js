function showTab(activeTab, inactiveTab) {
    document.getElementById(activeTab).classList.add('active');
    document.getElementById(inactiveTab).classList.remove('active');
    document.getElementById('inputValue').placeholder = `Enter ${activeTab === 'marlaTab' ? 'Marla' : 'Square Feet'} area`;
    document.getElementById('result').textContent = '';
}

function convertArea() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        alert('Invalid input. Please enter a valid number.');
        return;
    }

    const activeTab = document.querySelector('.tab.active').id;
    let convertedValue;
    let unit;

    if (activeTab === 'marlaTab') {
        // Marla to Square Feet
        convertedValue = inputValue * 272.25; // 1 Marla = 272.25 square feet
        unit = 'Square Feet';
    } else {
        // Square Feet to Marla
        convertedValue = inputValue / 272.25; // 1 Marla = 272.25 square feet
        unit = 'Marla';
    }

    document.getElementById('result').textContent = `${inputValue} ${activeTab === 'marlaTab' ? 'Marla' : 'Square Feet'} is equal to ${convertedValue.toFixed(2)} ${unit}.`;
}
// ... your existing code ...

// Add an event listener for the "keydown" event on the input field
document.getElementById('inputValue').addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Call the convertTemperature function if "Enter" key is pressed
        convertArea();
    }
});

// ... rest of your existing code ...

