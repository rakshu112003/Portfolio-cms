

js
function addProject() {
  const title = document.getElementById("projectTitle").value;
  const desc = document.getElementById("projectDesc").value;

  if (title && desc) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.innerHTML = `<h3>title</h3><p>{desc}</p>`;
    document.getElementById("projectsContainer").appendChild(projectDiv);
    
    // Clear inputs
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDesc").value = "";
  } else {
    alert("Please enter both title and description.");
  }
}




