//Declaring Variables for All Lab Project Pages!!
class Page {
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

document.getElementById('why').innerHTML = myDashboard.why;