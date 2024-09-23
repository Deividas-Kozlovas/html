const link = document.querySelector('#link');
const colors = document.querySelectorAll('.change-collor');
const 
const test = document.querySelectorAll('#test');

link.addEventListener('click', () => {
    console.log(colors);
    colors.forEach((color) => {
        console.log(color);
        color.style.color = "blue";
    });

    console.log(test);
    test.forEach(tst => {
        console.log(tst);
        tst.style.color = "red";
    });

    // colors.forEach(function(color){
    //     console.log(color.getAttribute('a'));
    //      color.style.color = "red";
    // })

    // for (let i in colors){
    //     console.log[colors[i]];
    //     let li = colors[i];
    //     li.style.color = "red";
    // }
})

