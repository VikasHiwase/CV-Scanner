console.log("Cv sreener");

const data = [
  {
    name: "Pankaj Gotefode",
    age: 26,
    city: "Bangalore",
    language: "Python",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Aakash Matade",
    age: 27,
    city: "Pune",
    language: "Go",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Aishle Anderson",
    age: 24,
    city: "Delhi",
    language: "Java",
    framework: "VueJs",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Vikas Hiwase",
    age: 25,
    city: "Nagpur",
    language: "Javascript",
    framework: "ReactJs",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Divya sharma",
    age: 20,
    city: "Goa",
    language: "Php",
    framework: "JQuery",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

// CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);

nextCV();

// Button listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class='list_group'>
      <li>Name: ${currentCandidate.name}</li>
      <li>${currentCandidate.age} years old</li>
      <li>Lives in ${currentCandidate.city}</li>
      <li>Primary works on ${currentCandidate.language}</li>
      <li>uses ${currentCandidate.framework} framework</li>
      </ul>`;
  } else {
    alert("End of application");
    window.location.reload();
  }
}
