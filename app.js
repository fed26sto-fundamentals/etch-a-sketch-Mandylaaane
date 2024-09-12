//Create a webpage with a 16x16 grid of square divs.

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
    }
});

//Create borders and colors





//Grid created? CSS linked? Check browser dev tools for errors.





//Check elements panel, have elements shown up but are somehow hidden?




//Add console.log statements in your JavaScript, check if loaded.




//Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.




//Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.