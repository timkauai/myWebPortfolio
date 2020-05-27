let main = document.createElement('div');
main.className = 'ajax-sec'
document.body.appendChild(main);

makeElem('I am learning Ajax!', 'h1', 'heading');
makeElem('See Traversy Media Course', 'p', 'paragraph');
makeElem('AJAX is a way to update text and basically change things dynamically!! It is basically asyncronous functions or functions that take time to complete.')

function makeElem(inner, elem, className) {
    if (elem == null) {
        elem = 'p'
    }
    let creation = document.createElement(elem);
    creation.className = className
    creation.innerHTML = inner;
    main.appendChild(creation);
}


makeElem('here is an async example:');


setTimeout(() => {
    makeElem('this is in the timeout!!');
}, 2000);

makeElem('this is after the timeout in code but comes out before!! its funny, WEB APIs take care of the async func and lets everything else go!!');

makeElem('Here is how you can run ASYNC functions, but allow the code to run like a sync func!');

function betterAsync(callback) {
    setTimeout(() => {
        makeElem('the page waited for this one!!');
        callback('this is in the callback');
    }, 5000)
}

const betterAsyncVariable = betterAsync(message => {
    makeElem(message);
})


makeElem("Try to avoid callback hell!!! its hard to read and it is abscially just adding a ton of callbacks inside of eachother! DON'T DO THIS");

makeElem('This next section is done with promises not callbacks!!', 'h4')

const asyncPromisePractice = new Promise((resolve, rejet) => {
    setTimeout(() => {
        makeElem('its working rn')
        resolve('it worked!')
        reject(new Error('error'))
    }, 1000)
})

asyncPromisePractice
    .then(user => {
        makeElem(user)
    })
    .catch(
        err => makeElem(err.message)
    );


makeElem('Here we can use async await with promises to make the code run a bit more syncronous... all you got to do is put an await in the front of the call in the const and add an async infront of the function name!!With async await, you can wrap everythingin a try to attempt to run code and then ad a catch at the end to check if the function worked!', 'h5');
makeElem('you can use .all on promises to run mulitple fetches at once!!', 'h5');