// Function to filter cars by user input in the search bar
function searchCar() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let carItems = document.getElementsByClassName('car-item');

    for (let i = 0; i < carItems.length; i++) {
        let carName = carItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        
        // If the car name matches the input, display it; otherwise, hide it
        if (carName.includes(input)) {
            carItems[i].style.display = 'block';
        } else {
            carItems[i].style.display = 'none';
        }
    }
}

// Attach the search function to the search bar input
document.getElementById('search-input').addEventListener('keyup', searchCar);