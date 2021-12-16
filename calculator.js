let counter = 0;
function addCourse() {
  let addNew = document.createElement("form");
  addNew.classList.add("add_new", `key-${counter}`);
  const course_name = `
<form class="add_new key-${counter}">
    <input type="text" placeholder="Course Code" class="courses key-${counter}" required/>
    <select class="credit key-${counter}" required>
      <option class="credit" value="select">credit</option>
      <option class="credit" value="4">4</option>
      <option class="credit" value="3">3</option>
      <option class="credit" value="2">2</option>
      <option class="credit" value="1">1</option>
    </select>
    <select class="SGPA id="SGPA" key-${counter}" required>
      <option class="SGPA" value="select">SGPA</option>
      <option class="SGPA" value="4.0">4.0</option>
      <option class="SGPA" value="3.75">3.75</option>
      <option class="SGPA" value="3.5">3.5</option>
      <option class="SGPA" value="3.25">3.25</option>
      <option class="SGPA" value="3.0">3.0</option>
      <option class="SGPA" value="2.75">2.75</option>
      <option class="SGPA" value="2.5">2.5</option>
      <option class="SGPA" value="2.25">2.25</option>
      <option class="SGPA" value="2.0">2.0</option>
      <option class="SGPA" value="0">F</option>
    </select>
</form>
`;
  addNew.innerHTML = course_name;
  document.getElementById("courses").appendChild(addNew);
  counter++;
}

function removeCourse() {
  document.querySelector("form.add_new").remove();
  counter--;
}

const reports = [];

function calcCgpaa() {
  /*const sgpa = parseFloat(document.getElementById("SGPA").value);*/
  /*const credit = parseFloat(document.getElementById("credit").value);*/
  const sgpa = document.querySelectorAll("select.SGPA");
  const credit = document.querySelectorAll("select.credit");
  const listOfSgpa = [];
  const listOfCredit = [];
  let totalSgpa = 0;
  let totalCredit = 0;
  var multiply = 0;
  let CourseCredit = 0;
  let CourseSgpa = 0;
  credit.forEach((e) => {
    CourseCredit = parseFloat(e.value);
    totalCredit += CourseCredit;
    listOfCredit.push(CourseCredit);
  });

  sgpa.forEach((e) => {
    CourseSgpa = parseFloat(e.value);
    totalSgpa += CourseSgpa;
    listOfSgpa.push(CourseSgpa);
  });

  for (let i = 0; i < counter; i++) {
    multiply += listOfSgpa[i] * listOfCredit[i];
  }

  document.getElementById("calc-cgpa").innerHTML =
    "YOUR CGPA IS: " + (multiply / totalCredit).toFixed(2);
  console.log("list of credit " + listOfCredit);
  console.log("list Of Sgpa " + listOfSgpa);
  console.log("sgpa * credit" + sgpa * credit);
  console.log("counter :" + counter);
  console.log("totalCredit" + totalCredit);
  console.log("totalSgpa" + totalSgpa);
  console.log("multiply value" + multiply);

  /*
  document.getElementById("calc-cgpa").innerHTML = sgpa * credit;
  document.getElementById("Counter").innerHTML = counter;
  document.getElementById("totalUnit").innerHTML = totalCredit;
  document.getElementById("totalSgpa").innerHTML = totalSgpa;
  document.getElementById("multiply").innerHTML = multiply;
  */
}
