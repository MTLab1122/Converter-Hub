function showTab(activeTab, inactiveTab) {
    document.getElementById(activeTab).classList.add('active');
    document.getElementById(inactiveTab).classList.remove('active');
    document.getElementById('inputValue').placeholder = `Enter ${activeTab === 'yardTab' ? 'Yard' : 'Square Feet'} area`;
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

    if (activeTab === 'yardTab') {
        // Yards to Square Feet
        convertedValue = inputValue * 9; // 1 Yard = 9 Square Feet
        unit = 'Square Feet';
    } else {
        // Square Feet to Yards
        convertedValue = inputValue / 9; // 1 Yard = 9 Square Feet
        unit = 'Yards';
    }

    document.getElementById('result').textContent = `${inputValue} ${activeTab === 'yardTab' ? 'Yards' : 'Square Feet'} is equal to ${convertedValue.toFixed(2)} ${unit}.`;
}

document.getElementById('inputValue').addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Call the convertTemperature function if "Enter" key is pressed
        convertArea();
    }
});