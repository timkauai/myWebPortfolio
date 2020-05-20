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
      line3: "I graduted from Island School.",
      line4: "I plan on attending Santa Clara University to major in Finance.",
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
      line1: "I write code from a designers perspective: to look good",
      line2: "I try to learn something new with every build",
      line3:
        "Turing a design into an actual product is the best part of coding",
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
      const confidElem = document.createElement("p");
      confidElem.innerHTML = skillText[1];
      skillItemDiv.appendChild(skillElem);
      skillItemDiv.appendChild(confidElem);
      skillsDiv.appendChild(skillItemDiv);
    });
    document.body.appendChild(skillsDiv);
    return this;
  }
  createJobExp() {
    let jobExp = {
      job1: "Hokuala",
      job2: "Nalukai",
    };
    this.jobExp = jobExp;
    let jobExpDiv = document.createElement("div");
    jobExpDiv.className = "job-exp-div";
    Object.keys(jobExp).map(function (key, index) {
      let job = jobExp[key];
      const jobElem = document.createElement("p");
      jobElem.innerHTML = job;
      jobExpDiv.appendChild(jobElem);
    });
    document.body.appendChild(jobExpDiv);
    return this;
  }
  createMyProjects() {
    let projects = {
      proj1: "Randevu",
    };
    this.myProjects = projects;
    let projectsDiv = document.createElement("div");
    projectsDiv.className = "projects-div";
    Object.keys(projects).map(function (key, index) {
      let project = projects[key];
      const projectElem = document.createElement("p");
      projectElem.innerHTML = project;
      projectsDiv.appendChild(projectElem);
    });
    document.body.appendChild(projectsDiv);
    return this;
  }
  createContact() {
    this.contact = "Lets get in contact";
    let contactDiv = document.createElement("div");
    contactDiv.className = "contact-div";
    const contactElem = document.createElement("p");
    contactElem.innerHTML = this.contact;
    contactDiv.appendChild(contactElem);
    document.body.appendChild(contactDiv);
    return this;
  }
}

class PageContext {
  constructor(
    pageTitle,
    {
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
  contact: true,
});

const learning = new PageContext("to learn about you", {
  meIntroOne: true,
  meIntroTwo: true,
  skills: true,
  workExp: true,
  projs: true,
  lab: true,
  contact: true,
});

const check = new PageContext("to check this site out", {
  projs: true,
  lab: true,
});

const contact = new PageContext("to get in contact with you", {
  contact: true,
});

const work = new PageContext("to see your work", {
  workExp: true,
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
