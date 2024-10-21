const sales = [
    {
        id:12,
        title:"phones",
        date:"2024-12-05",
        count:155,
        sum:180684.22
    },
    {
        id:13,
        title:"other",
        date:"2022-09-08",
        count:15,
        sum:8684.22
    },
    {
        id:14,
        title:"title",
        date:"2023-10-05",
        count:125,
        sum:884.02
    },
    {
        id:15,
        title:"shop",
        date:"2024-12-05",
        count:200,
        sum:814644.02
    },
    {
        id:16,
        title:"work",
        date:"2024-12-05",
        count:25,
        sum:120684.22
    },
    {
        id:17,
        title:"servce",
        date:"2004-10-05",
        count:65,
        sum:190684.20
    }
];

// filterSum(sales);
// function filterSum(sales){
//     console.log(sales.filter((sale) => sale.sum > 50000.00));
// }


// filterMonths(sales);
// function filterMonths(sales){
//     console.log(sales.filter((sale) => new Date(sale.date).getMonth() == 12));
// }


// console.log(addSum(13,12,13,15,16,85));
// function addSum(...nums){
//     return nums.reduce((total, num) => total + num, 0);
// }

// const students = ["Petras", "Jonas", "Tomas", "Ieva"];

// asc(students);
// function asc(students){
//     console.log(students.sort());
// }

// dsc(students);
// function dsc(students){
//     console.log(students.sort().reverse());
// }

// dsc(students);
// function dsc(students){
//     console.log(students.sort(function(a, b){return b-a}));
// }
asynceCall1(sales);
asynceCall2(sales);

async function asynceCall1(sales) {
    const result = await sortSum1(sales);
    console.log(result);
};

function sortSum1(sales){
    return new Promise((resolve) => {
        resolve(
            sales.sort((a,b)=>{
                if(a.sum > b.sum) return -1;
                if(a.sum < b.sum) return 1;
                return 0;
            })
        )
    })
};


async function asynceCall2(sales) {
    const result = await sortSum2(sales);
    console.log(result);
};

function sortSum2(sales){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                sales.sort((a,b)=>{
                    if(a.title > b.title) return -1;
                    if(a.title < b.title) return 1;
                    return 0;
                })
            )
        }, 2000);
    })
};