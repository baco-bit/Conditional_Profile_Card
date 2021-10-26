import "../style/index.css";

function render(variables = {}) {
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let name = variables.name != null ? `${variables.name}` : "Lucy";

  let lastName =
    variables.lastname != null ? `${variables.lastname}` : "Boilett";

  let role = variables.role != null ? `${variables.role}` : "Web Developer";

  let city = variables.city != null ? `${variables.city}` : "Miami";

  let country = variables.country != null ? `${variables.country}` : "USA";

  let socialMediaPosition =
    variables.socialMediaPosition != "position-right"
      ? `${variables.socialMediaPosition}`
      : "position-right";

  let twitter =
    variables.twitter != null ? `${variables.twitter}` : "alesanchezr";

  let github = variables.github != null ? `${variables.github}` : "alesanchezr";

  let linkedin =
    variables.linkedin != null ? `${variables.linkedin}` : "alesanchezr";

  let instagram =
    variables.instagram != null ? `${variables.instagram}` : "alesanchezr";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastName}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${socialMediaPosition}">
            <li><a href="https://twitter.com/${twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,

    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",

    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",

    socialMediaPosition: "position-left",

    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
