document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from reloading the page

    let jobTitle = document.getElementById("jobTitle").value.trim();
    if (jobTitle === "") return;

    let jobList = document.getElementById("jobList");

    // Create job list item
    let li = document.createElement("li");
    li.textContent = jobTitle;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        jobList.removeChild(li);
    };

    // Append button to list item and list item to list
    li.appendChild(deleteBtn);
    jobList.appendChild(li);

    // Clear input field
    document.getElementById("jobTitle").value = "";
});
