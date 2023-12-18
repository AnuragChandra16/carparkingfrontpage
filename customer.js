var n1, n2, n3, n4, n5;

document.querySelector(".button2").addEventListener("click", function () {
    n1 = document.getElementById("fname").value.trim();
    n2 = document.getElementById("lname").value.trim();
    n3 = document.getElementById("contact").value.trim();
    n4 = document.getElementById("bookingtime").value.trim();
    n5 = document.getElementById("bookingtime1").value.trim();
    const fromInput = document.getElementById("bookingtime");
        const toInput = document.getElementById("bookingtime1");

// Parse the date and time values from the input fields
        const fromDateTime = new Date(fromInput.value);
        const toDateTime = new Date(toInput.value);

// Calculate the time difference in milliseconds
        const timeDifference = toDateTime - fromDateTime;
        const hoursDifference = timeDifference / (1000 * 60 * 60);
    if (n1 !== "" && n2 !== "" && n3 !== "" && n4 !== "" && n5 !== "") {
        alert("Thanks for booking! We will notify you soon about your parking details");
        alert(hoursDifference);

    } else {

        alert("Please fill out all the fields.");
    }
});
