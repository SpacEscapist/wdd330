function loadStory() {
  const storyName = document.getElementById("name_input").value;
  const storyHTML = localStorage.getItem(storyName);
  document.getElementById("story_editor").value = storyHTML;
}

function saveStory() {
  const storyName = document.getElementById("name_input").value;
  const storyHTML = document.getElementById("story_editor").value;
  localStorage.setItem(storyName, storyHTML);
}

function displayStory() {
  const storyHTML = document.getElementById("story_editor").value;
  document.getElementById("story_display").innerHTML = storyHTML;
}
