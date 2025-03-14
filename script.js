document.addEventListener("DOMContentLoaded", () => {
    const jobForm = document.getElementById("jobForm");
    const jobList = document.getElementById("jobList");

    jobForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const jobTitle = document.getElementById("jobTitle").value;
        const assignedTo = document.getElementById("assignedTo").value;
        const jobStatus = document.getElementById("jobStatus").value;
        
        if (jobTitle && assignedTo) {
            const jobItem = document.createElement("li");
            jobItem.innerHTML = `<strong>${jobTitle}</strong> - Assigned to: ${assignedTo} - Status: <span class="status">${jobStatus}</span> 
                                <button class="delete">Delete</button>`;
            
            jobList.appendChild(jobItem);
            
            document.getElementById("jobTitle").value = "";
            document.getElementById("assignedTo").value = "";
            document.getElementById("jobStatus").value = "pending";
        }
    });

    jobList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete")) {
            event.target.parentElement.remove();
        }
    });
});
