function clicked(clicked) {
  localStorage.setItem("clicked", clicked);
}

let hiringHeadingCopy = "Here is why you should hire me:"

class PageContent {
  constructor(PageContext) {
    let heading = document.createElement("p");
    heading.innerHTML = PageContext.pageTitle;
    heading.className = "current-link"
    let nav = document.getElementById('nav');
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
    let hiringHeadingDiv = document.createElement("div");
    const hiringHeading = (document.createElement("p").innerHTML = this.hiringHeading);
    hiringHeadingDiv.innerHTML += hiringHeading;
    hiringHeadingDiv.className = "main-heading"
    document.body.appendChild(hiringHeadingDiv);
    return this;
  }

  createMeIntroOne() {
    var introOneLines = {
      line1: "I am only 18 years old. <br/>",
      line2: "Born and Raised on Kauai, Hawaii.<br/>",
      line3: "I graduted from Island School.<br/>",
      line4: "I plan on attending Santa Clara University to major in Finance.<br/>",
    };
    this.meIntroOne = introOneLines;
    let introOneDiv = document.createElement("div");
    Object.keys(introOneLines).map(function (key, index) {
      let lineText = introOneLines[key];
      const lineElem = (document.createElement("p").innerHTML = lineText);
      introOneDiv.innerHTML += lineElem;
      introOneDiv.className = "introOneDiv";
    });
    var newDiv = document.createElement("div");
    newDiv.id = "dark";
    document.getElementsByTagName('body')[0].appendChild(newDiv);
    return this;
  }
  createMeIntroTwo() {
    var obj = {
      line1: "I write code from a designers perspective: to look good",
      line2: "I try to learn something new with every build",
      line3: "Turing a design into an actual product is the best part of coding",
    };
    this.meIntroTwo = obj;
    let introDiv = document.createElement("div");
    Object.keys(obj).map(function (key, index) {
      let txt = obj[key];
      const elm = (document.createElement("p").innerHTML = txt);
      introDiv.innerHTML += elm;
      console.log(txt);
    });
    document.body.appendChild(introDiv);
    return this;
  }
  createSkills() {
    var obj = {
      one: ["HTML", "95%"],
      two: ["CSS and Sass", "85%"],
      three: ["UI and UX Design", "70%"],
      four: ["JavaScript", "70%"],
      five: ["React.js", "50%"],
    };
    this.skills = obj;
    let introDiv = document.createElement("div");
    Object.keys(obj).map(function (key, index) {
      let txt = obj[key];
      const skills = (document.createElement("p").innerHTML = txt[0]);
      const confidence = (document.createElement("p").innerHTML = txt[1]);
      introDiv.innerHTML += skills;
      introDiv.innerHTML += confidence;
      console.log(txt);
    });
    document.body.appendChild(introDiv);
    return this;
  }
  createJobExp() {
    let obj = {
      job1: "Hokuala",
      job2: "Nalukai",
    };
    this.jobExp = obj;
    let introDiv = document.createElement("div");
    Object.keys(obj).map(function (key, index) {
      let txt = obj[key];
      const job = (document.createElement("p").innerHTML = txt);
      introDiv.innerHTML += job;
      console.log(txt);
    });
    document.body.appendChild(introDiv);
    return this;
  }
  createMyProjects() {
    let obj = {
      proj1: "Randevu",
    };
    this.myProjects = obj;
    let introDiv = document.createElement("div");
    Object.keys(obj).map(function (key, index) {
      let txt = obj[key];
      const job = (document.createElement("p").innerHTML = txt);
      introDiv.innerHTML += job;
      console.log(txt);
    });
    document.body.appendChild(introDiv);
    return this;
  }
  createContact() {
    this.contact = "Lets get in contact";
    let introDiv = document.createElement("div");
    const job = (document.createElement("p").innerHTML = this.contact);
    introDiv.innerHTML += job;
    document.body.appendChild(introDiv);
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
  const page = new PageContent(learning)
} else if (pageName === "check") {
  const page = new PageContent(check)
} else if (pageName === "contact") {
  const page = new PageContent(contact)
} else if (pageName === "work") {
  const page = new PageContent(work)
}