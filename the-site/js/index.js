function clicked(clicked) {
  localStorage.setItem("clicked", clicked);
}

let hiringHeadingCopy = "Here is why you should hire me:";

class PageContent {
  constructor(PageContext) {
    let heading = document.createElement("p");
    heading.innerHTML = PageContext.pageTitle;
    heading.className = "current-link";
    let nav = document.getElementById("nav");
    nav.appendChild(heading);
    if (PageContext.hiringHeading) {
      this.createHiringHeading();
    }
    if (PageContext.meIntroOne) {
      this.createMeIntroOne();
    }
    if (PageContext.meIntroTwo) {
      this.createMeIntroTwo();
    }
    if (PageContext.skills) {
      this.createSkills();
    }
    if (PageContext.workExp) {
      this.createJobExp();
    }
    if (PageContext.projs) {
      this.createMyProjects();
    }
    if (PageContext.contact) {
      this.createContact();
    }
  }

  createHiringHeading() {
    this.hiringHeading = hiringHeadingCopy;
    const hiringHeading = document.createElement("h3");
    hiringHeading.innerHTML = this.hiringHeading;
    hiringHeading.className = "main-heading";
    document.body.appendChild(hiringHeading);
    return this;
  }

  createMeIntroOne() {
    var introOneLines = {
      line1: "I am only 18 years old.",
      line2: "Born and Raised on Kauai, Hawaii.",
      line3: "I am attending Santa Clara University and majoring in Finance.",
    };
    this.meIntroOne = introOneLines;
    let introOneDiv = document.createElement("div");
    introOneDiv.className = "intro-one-div";
    Object.keys(introOneLines).map(function (key, index) {
      let lineText = introOneLines[key];
      const lineElem = document.createElement("p");
      lineElem.innerHTML = lineText;
      lineElem.className = "intro-one-line";
      introOneDiv.appendChild(lineElem);
    });
    var newDiv = document.createElement("div");
    newDiv.className = "dark";
    introOneDiv.appendChild(newDiv);
    document.getElementsByTagName("body")[0].appendChild(introOneDiv);
    return this;
  }
  createMeIntroTwo() {
    var introTwo = {
      line1: "I write pixel perfect code to work on any device",
      line2: "I try to learn something new with every build",
      line3: "I am always looking for a new project",
    };
    this.meIntroTwo = introTwo;
    let introTwoDiv = document.createElement("div");
    introTwoDiv.className = "intro-two-div";
    Object.keys(introTwo).map(function (key, index) {
      let lineText = introTwo[key];
      const lineElem = document.createElement("p");
      lineElem.innerHTML = lineText;
      lineElem.className = "intro-two-line";
      introTwoDiv.appendChild(lineElem);
    });
    var newDiv = document.createElement("div");
    newDiv.className = "dark";
    introTwoDiv.appendChild(newDiv);
    document.getElementsByTagName("body")[0].appendChild(introTwoDiv);
    return this;
  }
  createSkills() {
    var skills = {
      one: ["HTML", "95%"],
      two: ["CSS and Sass", "85%"],
      three: ["UI and UX Design", "70%"],
      four: ["JavaScript", "70%"],
      five: ["React.js", "50%"],
    };
    this.skills = skills;
    let skillsDiv = document.createElement("div");
    skillsDiv.className = "skills";
    let heading = document.createElement("h3");
    heading.innerHTML = "i've got some skills:";
    heading.className = "heading";
    skillsDiv.appendChild(heading);
    let headingUnderline = document.createElement("div");
    headingUnderline.className = "dark";
    skillsDiv.appendChild(headingUnderline);
    Object.keys(skills).map(function (key, index) {
      let skillItemDiv = document.createElement("div");
      skillItemDiv.className = "skill-item";
      let skillText = skills[key];
      const skillElem = document.createElement("p");
      skillElem.innerHTML = skillText[0];
      skillItemDiv.appendChild(skillElem);
      skillsDiv.appendChild(skillItemDiv);
    });
    document.body.appendChild(skillsDiv);
    return this;
  }
  createJobExp() {
    let jobExp = {
      job1: "Hokuala <br> Cart Boy. <br> I learned a bunch about hospitality and treating the customers that come to play golf.",
      job2: "Nalukai <br> Entrepreneur. <br> Nalukai is not exactly a job, but I was an Entrepreneur and learned about working with other coder and I learned a bunch about business. This camp changed my life.",
    };
    this.jobExp = jobExp;
    let jobExpDiv = document.createElement("div");
    jobExpDiv.className = "job-exp-div";
    let heading = document.createElement("h3");
    heading.innerHTML = "My Work Experience:";
    heading.className = "heading";
    jobExpDiv.appendChild(heading);
    let headingUnderline = document.createElement("div");
    headingUnderline.className = "dark";
    jobExpDiv.appendChild(headingUnderline);
    let jobsDiv = document.createElement("div");
    jobsDiv.className = "jobs"
    Object.keys(jobExp).map(function (key, index) {
      let job = jobExp[key];
      const jobElem = document.createElement("p");
      jobElem.innerHTML = job;
      jobsDiv.appendChild(jobElem);
    });
    jobExpDiv.appendChild(jobsDiv);
    document.body.appendChild(jobExpDiv);

    return this;
  }
  createMyProjects() {
    let projects = {
      proj1: "Randevu <br> <br> A MeetUp Platform for kickstarting a new lifestyle",
      proj2: "Lab <br> <br> A part of this site that has all of my small side-projects."
    };
    this.myProjects = projects;
    let projectsDiv = document.createElement("div");
    projectsDiv.className = "projects-div";
    let heading = document.createElement("h3");
    heading.innerHTML = "My Projects:";
    heading.className = "heading";
    projectsDiv.appendChild(heading);
    let instrutorElem = document.createElement("p");
    instrutorElem.innerHTML = "Click on Lab to see other projects";
    projectsDiv.appendChild(instrutorElem);
    let headingUnderline = document.createElement("div");
    headingUnderline.className = "dark";
    projectsDiv.appendChild(headingUnderline);
    let projDiv = document.createElement("div");
    projDiv.className = "proj"
    Object.keys(projects).map(function (key, index) {
      if (key == "proj2") {
        let project = projects[key];
        const projectElem = document.createElement("div");
        projectElem.innerHTML = '<a class="projectElemA" href="/the-lab/lab.html">' + project + "</a>";
        projectElem.className = "lab"
        projDiv.appendChild(projectElem);
      } else {
        let project = projects[key];
        const projectElem = document.createElement("a");
        projectElem.className = 'projElem'
        projectElem.innerHTML = project;
        projDiv.appendChild(projectElem);
      }
    });
    projectsDiv.appendChild(projDiv)
    document.body.appendChild(projectsDiv);
    return this;
  }
  createContact() {
    this.contact = "Lets get in contact";
    let contactForm = document.createElement("form");
    contactForm.action = '/the-site/pages/page.html'
    contactForm.method = "POST";
    let contactDiv = document.createElement("div");
    contactDiv.className = "contact-div";
    const contactElem = document.createElement("p");
    contactElem.innerHTML = this.contact;
    contactDiv.appendChild(contactElem);
    const errorElem = document.createElement('div');
    errorElem.className = 'error'
    contactDiv.appendChild(errorElem);
    const contactInputOne = document.createElement("div");
    const contactInputOneHeading = document.createElement("p");
    const contactInputOneInput = '<input id="name" name="name" type="text">'
    contactInputOneHeading.className = "contact-input-one-heading";
    contactInputOneHeading.innerHTML = "Your Name:";
    contactInputOne.className = "contact-input-one";
    contactInputOne.id = "name";
    contactInputOne.appendChild(contactInputOneHeading);
    contactInputOne.innerHTML += contactInputOneInput
    contactDiv.appendChild(contactInputOne);
    const contactInputTwo = document.createElement("div");
    const contactInputTwoHeading = document.createElement("p");
    contactInputTwoHeading.innerHTML = "Your email:"
    const contactInputTwoInput = document.createElement("input");
    contactInputTwoInput.id = "email"
    contactInputTwo.appendChild(contactInputTwoHeading);
    contactInputTwo.appendChild(contactInputTwoInput);
    contactDiv.appendChild(contactInputTwo);
    const contactInputThree = document.createElement("div");
    contactInputThree.className = 'contact-input-three'
    const contactInputThreeHeading = document.createElement("p");
    contactInputThreeHeading.innerHTML = "Your message:"
    contactInputThreeHeading.className = 'contact-input-three-heading'
    const contactInputThreeInput = document.createElement("input");
    contactInputThreeInput.className = 'contact-input-three-input'
    contactInputThreeInput.id = 'message'
    contactInputTwo.appendChild(contactInputThreeHeading);
    contactInputTwo.appendChild(contactInputThreeInput);
    contactDiv.appendChild(contactInputThree);
    const contactButton = document.createElement("button");
    contactButton.className = "contactButton";
    contactButton.type = "submit"
    contactButton.innerHTML = 'Send Message!'
    contactDiv.appendChild(contactButton)
    contactForm.appendChild(contactDiv);
    document.body.appendChild(contactForm);

    contactForm.addEventListener('submit', (e) => {
      let messages = [];
      // if (contactInputOneInput.value === '' || contactInputOneInput.value == null) {
      //messages.push('Name is required')
      // }
      if (contactInputTwoInput.value === '' || contactInputTwoInput.value == null) {
        messages.push('Email is required')
      }
      if (contactInputThreeInput.value === '' || contactInputThreeInput.value == null) {
        messages.push('Message is Required')
      }

      if (messages.length > 0) {
        e.preventDefault()
        errorElem.innerHTML = messages.join(', ')
      }
    })

    contactForm.action = "https://script.google.com/macros/s/AKfycbzYXWcZabRMDRZP-7zpcmcC1ibZWl5SrbZ99PPo/exec";
    return this;
  }
}

class PageContext {
  constructor(
    pageTitle, {
      hiringHeading = false,
      meIntroOne = false,
      meIntroTwo = false,
      skills = false,
      workExp = false,
      projs = false,
      lab = false,
      contact = false,
      blog = false,
    } = {}
  ) {
    this.pageTitle = pageTitle;
    this.hiringHeading = hiringHeading;
    this.meIntroOne = meIntroOne;
    this.meIntroTwo = meIntroTwo;
    this.skills = skills;
    this.workExp = workExp;
    this.projs = projs;
    this.lab = lab;
    this.contact = contact;
    this.blog = blog;
  }
}
const hiring = new PageContext("I am interested in hiring you", {
  hiringHeading: true,
  meIntroOne: true,
  meIntroTwo: true,
  skills: true,
  workExp: true,
  projs: true,
  lab: true,
});

const learning = new PageContext("to learn about you", {
  meIntroOne: true,
  meIntroTwo: true,
  skills: true,
  workExp: true,
  projs: true,
  lab: true,
});

const check = new PageContext("to check this site out", {
  projs: true,
  lab: true,
});

const contact = new PageContext("to get in contact with you", {});

const work = new PageContext("to see your work", {
  workExp: true,
  projs: true,
  lab: true,
});

let pageName = localStorage.getItem("clicked");

if (pageName === "hiring") {
  const page = new PageContent(hiring);
} else if (pageName === "learning") {
  const page = new PageContent(learning);
} else if (pageName === "check") {
  const page = new PageContent(check);
} else if (pageName === "contact") {
  const page = new PageContent(contact);
} else if (pageName === "work") {
  const page = new PageContent(work);
}