const projects = document.querySelectorAll('.project');
let currentIndex = 0;

function displayProject(index) {
  // hide all projects
  projects.forEach(project => project.style.display = 'none');

  // show the project at the given index
  projects[index].style.display = 'block';

  // update the current index
  currentIndex = index;
}

// add event listeners for the "previous" and "next" buttons
document.querySelector('#prev-button').addEventListener('click', () => {
  displayProject(currentIndex - 1);
});
document.querySelector('#next-button').addEventListener('click', () => {
  displayProject(currentIndex + 1);
});

// display the first project initially
displayProject(currentIndex);