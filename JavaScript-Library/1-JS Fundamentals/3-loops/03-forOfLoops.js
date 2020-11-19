//of requires that your 'thing" you're looping through be iterable -- aka, it needs to be numbered.

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1}

for (items of student){
    console.log(item);
}                           //this does not work as the item is not numbered.


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}                            //Result: tabby says meow, british shorthair says meow...rag doll says meow