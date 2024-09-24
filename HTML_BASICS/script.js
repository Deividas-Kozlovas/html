const link = document.querySelector('#link');
const colors = document.querySelectorAll('.change-collor a'); 
const test = document.querySelectorAll('#test a'); 

        let isRed = false;

        link.addEventListener('click', () => {
            colors.forEach((link, index) => {
                if (isRed) {
                    if (index % 2 === 0) {
                        link.style.color = 'green'; 
                        link.style.color = 'red';  
                    }
                } else {
                    if (index % 2 === 0) {
                        link.style.color = 'red';   
                    } else {
                        link.style.color = 'green';
                    }
                }
            });
            isRed = !isRed;
        });
