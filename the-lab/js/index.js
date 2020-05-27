//Declaring Variables for All Lab Project Pages!!
/*class Page {
    constructor(project, {
        why,
        goal,
        experience,
        outcome,
        myRole
    } = {}) {
        this.project = project;
        this.why = why;
        this.goal = goal;
        this.experience = experience;
        this.outcome = outcome;
        this.myRole = myRole;

    }
}

const myDashboard = new Page('myDashboard', {
    why: 'I wanted to make a Dashboard web application that I could look at every morning and at random parts of the day to see things like the weather, surf, reminders, unread messages and a simple to-do list!',
    goal: 'A web app that is clean, and easy to look at, since I am going to be looking at it everyday. I also wanted to make it easy to use so I am not the only one that would be able to use it!',
    experience: "This was my first time using react.js and API's. It was a new experience, but I got use to it! I became much more comfortable with design patterns, async functions and react.js in general.!!!!!!add some sketches!!!!",
    outcome: "In Progress! But here I would put how happy I am, what I would/plan to change",
    myRole: "I coded everything for this, and designed it! It was a fun side project!"
});

document.getElementById('why').innerHTML = myDashboard.why;*/

function clicked(clicked) {
  localStorage.setItem("lab-clicked", clicked);
}

let hiringHeadingCopy = "Here is why you should hire me:";

class PageContent {
  constructor(PageContext) {
    this.createNavItem(PageContext);
    this.createHeading(PageContext);
  }

  createNavItem(PageContext) {
    let heading = document.createElement("p");
    heading.innerHTML = PageContext.pageTitle;
    heading.className = "current-link";
    let nav = document.getElementById("nav");
    nav.appendChild(heading);
  }

  createHeading(PageContext) {
    let heading = document.createElement("p");
    heading.innerHTML = PageContext.heading;
    heading.className = "current-link";
    document.body.appendChild(heading);
  }
}

class PageContext {
  constructor(pageTitle, { heading = false } = {}) {
    this.pageTitle = pageTitle;
    this.heading = heading;
  }
}

const thisSite = new PageContext("This Very Site", {
  heading: true,
});

const Dashboard = new PageContext("theDashboard", {
  heading: true,
});

const Morality = new PageContext("Morality English Project", {
  heading: true,
});

const Success = new PageContext("Success English Project", {
  heading: "Hello",
});

let pageName = localStorage.getItem("lab-clicked");

console.log(pageName);

if (pageName == "this-site") {
  const page = new PageContent(thisSite);
} else if (pageName === "dashboard") {
  const page = new PageContent(Dashboard);
} else if (pageName === "morality") {
  const page = new PageContent(Morality);
} else if (pageName === "success") {
  const page = new PageContent(Success);
}
