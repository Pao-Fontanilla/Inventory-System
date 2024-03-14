document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById('inventoryTable');
    const checkbox = document.getElementById('checkbox');
    const tablesSection = document.querySelector('.tablesSection');

    // Array for storing inventory items
    const inventoryItems = [];

    // Function for adding new item in the inventory
    document.getElementById('inputForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Getting the item from the input field
        const item = document.getElementById('item').value;

        // Getting the quantity from the input field
        const quantity = document.getElementById('quantity').value;

        // Check if item or quantity is empty
        if (item.trim() === "" || quantity.trim() === "") {
            alert("Fill out the form first");
            return;
        }

        // Check if item already exists
        if (inventoryItems.includes(item)) {
            alert('Item already exists');
            return;
        }

        // Push the item to the inventoryItems list
        inventoryItems.push(item);

        // Create a new row in the table
        const newRow = table.insertRow(-1);
        newRow.innerHTML = `<td>${item}</td><td contenteditable="true">${quantity}</td>`;

        // Clear input fields
        document.getElementById('item').value = '';
        document.getElementById('quantity').value = '';
    });

    // Show table when checkbox is checked
    checkbox.addEventListener('change', function () {
        tablesSection.style.display = this.checked ? 'block' : 'none';
    });

    // Add click event listener to each quantity cell
    table.addEventListener('click', function (event) {
        if (event.target.tagName === 'TD' && event.target.cellIndex === 1) {
            event.target.contentEditable = true;
            event.target.focus();
        }
    });

    // Add blur event listener to each quantity cell
    table.addEventListener('blur', function (event) {
        if (event.target.tagName === 'TD' && event.target.cellIndex === 1) {
            event.target.removeAttribute('contenteditable');
        }
    });
});