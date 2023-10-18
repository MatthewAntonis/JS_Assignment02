/* 
Assignment 2 Creating an Image Gallery 
Course: COMP1073 Client-side Javascript
Name: Matthew Antonis 
Student Number: 200373088
Due Date: 2023/10/18
*/

// constants for query selector
const studentIdElement = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const imagesElement = document.getElementById('images');

const imageArray = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// function to change bg color from user input and add student id
function changeCustomColor() {
    let inputValue = parseInt(customNumberInput.value);
    let bgColor = getColorFromValue(inputValue);
    document.body.style.backgroundColor = bgColor;
    studentIdElement.innerText = "200373088"; //Replace with your student id
}

// function to get color based on value
function getColorFromValue(value) {
    let textColor = 'black';  // default text color
    let bgColor;

    if (value < 0 || value > 100) {
        bgColor = 'red';
        textColor = 'white';
    } else if (value >= 0 && value <= 20) {
        bgColor = 'green';
        textColor = 'white';
    } else if (value > 20 && value <= 40) {
        bgColor = 'blue';
        textColor = 'white';
    } else if (value > 40 && value <= 60) {
        bgColor = 'orange';
    } else if (value > 60 && value <= 80) {
        bgColor = 'purple';
        textColor = 'white';
    } else if (value > 80 && value <= 100) {
        bgColor = 'yellow';
    }

    // Set the text color for the entire body. 
    document.body.style.color = textColor;

    return bgColor;
}


// function to change bg color from random no.
function changeRandomColor() {
    let randomValue = Math.floor(Math.random() * 100) + 1;
    let bgColor = getColorFromValue(randomValue);
    document.body.style.backgroundColor = bgColor;
}

// function to generate options for select list
function addList() {
    if(imageSelect.children.length === 1) {
        imageArray.forEach(img => {
            let option = document.createElement('option');
            option.value = img;
            option.innerText = img;
            imageSelect.appendChild(option);
        });
    }
}

// function to change image
function changeImage() {
    let selectedImage = imageSelect.value;
    if(selectedImage) {
        imagesElement.src = `./img/${selectedImage}`;
        imagesElement.alt = selectedImage;
    } else {
        imagesElement.src = '';
        imagesElement.alt = '';
    }
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);