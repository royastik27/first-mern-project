const fs = require('fs');

let explore = () => {

    const messages = [
        { title: 'Under maintenance', text: 'This site is under development. Stay RELAXED ⏳ untill you get any update.' },
        { title: 'Explore!', text: 'Before you procede, explore the ENTIRE server!' },
        { title: 'Welcome message', text: 'Welcome to the SERVER!' }
    ]

    let output = '';

    for(let i = 0; i < messages.length; ++i) {
        output += `<div class='card m-2'><div class='card-header'>${messages[i].title}</div><div class='card-body'>${messages[i].text}</div></div>`;
    }

    return output;
}

module.exports = explore;