document.addEventListener("DOMContentLoaded", function () {
    const complaintForm = document.getElementById("complaintForm");

    complaintForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const complaint = document.getElementById("complaint").value;

        // You can perform further processing here, such as sending the complaint data to a server using AJAX.

        // For now, we'll just display a confirmation message.
        alert("Complaint submitted successfully!");
        complaintForm.reset();
    });
});
