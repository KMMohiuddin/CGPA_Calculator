let counter = 1;
function addCourse() {
let addNew = document.createElement("form");
addNew.classList.add("add_new", `key-${counter}`);
const course_name = `
<form class="add_new key-${counter}">
    <input type="text" placeholder="Course Code" class="courses key-${counter}" required/>
    <select class="credit-CREDITs key-${counter}" required>
      <option class="credit-CREDITs" value="select">credit-CREDITs</option>
      <option class="credit-CREDITs" value="4">4</option>
      <option class="credit-CREDITs" value="3">3</option>
      <option class="credit-CREDITs" value="2">2</option>
      <option class="credit-CREDITs" value="1">1</option>
    </select>
    <select class="grade key-${counter}" required>
      <option class="grade" value="select">SGPA</option>
      <option class="grade" value="4.0">4.0</option>
      <option class="grade" value="3.75">3.75</option>
      <option class="grade" value="3.5">3.5</option>
      <option class="grade" value="3.25">3.25</option>
      <option class="grade" value="3.0">3.0</option>
      <option class="grade" value="2.75">2.75</option>
      <option class="grade" value="2.5">2.5</option>
      <option class="grade" value="2.25">2.25</option>
      <option class="grade" value="2.0">2.0</option>
      <option class="grade" value="0">F</option>
    </select>
</form>
`;
addNew.innerHTML = course_name;
document.getElementById("courses").appendChild(addNew);
counter++;
}

function removeCourse() {
document.querySelector("form.add_new").remove();
}

const reports = [];

function calcCgpa() {

}
