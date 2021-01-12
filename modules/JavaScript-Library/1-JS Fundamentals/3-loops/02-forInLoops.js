//in does not require that the thing you loop through be numbered.

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){          //item represents the keys in our object - name, awesome, degree, week
    console.log(item)
    console.log(student [item])   //this time item will also give us the values in the object above - name, Peter, awesome, true, degree, js, week, 1
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat in catArray){
    console.log(cat);               //Result - 0 1 2 3 4 --Cat represents the numbers of these values in this array
    console.log(catArray [cat])         //result = 0, tabby, 1, british shorthair.....4, rag doll -- we get the value and the item
}                               

//write a for-in loop that capitalizes the first letter of a name

let instructor = 'pAuL';
let capName;

for (n in instructor){                      //n refers to the letter position, so this is position 0 - which is the p in Paul above
    if (n==0){
        capName = instructor[n].toUpperCase();  //this makes the first letter (position 0) uppercase
    } else {
        capName += instructor[n].toLowerCase();   //this makes the other letters lowercase
    }
}
    console.log(capName)