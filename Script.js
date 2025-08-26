
javascript
const data = {
  name: "Rakshitha",
  title: "Aspiring Full-Stack Developer",
  about: "I enjoy building websites using HTML, CSS, JavaScript. I’m also learning React and Node.js.",
  skills: ["HTML","typescript" "php" "CSS", "JavaScript", "React", "Node.js"],
  projects: [
    { name: "Portfolio Website", link: "https://rakshu-portfolio-7cg1.vercel.app" },
    { name: "Resume Builder", link: "https://rakshu112003.github.io/Resume-builder-web-app/" },
    { name: "Expense Tracker", link: "https://expenses-tracker-with-budget-alert.vercel.app" }
  ],
  footer: "© 2025 Rakshitha"
};

document.getElementById("name").innerText = data.name;
document.getElementById("title").innerText = data.title;
document.getElementById("about-text").innerText = data.about;

const skillsList = document.getElementById("skills-list");
data.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const projectsContainer = document.getElementById("projects-container");
data.projects.forEach(project => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>project.name</strong><br><a href="{project.link}" target="_blank">${project.link}</a>`;
  projectsContainer.appendChild(div);
[8/26, 3:55 PM] ChatGPT: });

document.getElementById("footer-text").innerText = data.footer;
