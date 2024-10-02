'use strict';
// 17 variant
// 1 4 3 5 7
// picture city cell country email

const controlBtn = document.querySelector('#controls');
const contentDiv = document.querySelector('#content');
const preloader = document.querySelector('#preloader');
const resStatus = document.querySelector('#res-status');

controlBtn.addEventListener('click', e => getPersonsData(e));

function getPersonsData(e) {
    if (e.target && e.target.id === 'fetch-btn') {
        resStatus.innerHTML = '';
        showPreloader();

        fetch('https://randomuser.me/api/?results=4')
        .then(res => res.json())
        .then(data => {
            hidePreloader();
            resStatus.textContent = 'Success!';

            const personWrapper = document.createElement('div');
            personWrapper.classList.add('person-wrapper');

            data.results.map(personData => {
                const {
                    picture: { large },
                    location: { city, country },
                    cell,
                    email
                } = personData;
                
                const person = document.createElement('div');
                person.classList.add('person');

                person.innerHTML = `
                    <img src="${large}" alt="Person photo" class="avatar">
                    <p class="city">City: ${city}</p>
                    <p class="cell">Cell phone number: ${cell}</p>
                    <p class="country">Country: ${country}</p>
                    <p class="email">Email: ${email}</p>
                `;

                personWrapper.append(person);
            });

            contentDiv.innerHTML = personWrapper.outerHTML;
        })
        .catch(err => {
            hidePreloader();
            
            resStatus.innerHTML = `
                Something went wrong :(<br>
                ${err}
            `;
        });
    }
}

function showPreloader() {
    preloader.classList.add('show');
}

function hidePreloader() {
    preloader.classList.remove('show');
}