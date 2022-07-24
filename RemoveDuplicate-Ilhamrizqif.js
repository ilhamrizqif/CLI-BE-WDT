let removeDuplicate = [1,3,3,3,1,5,6,7];

let uniqueChars = removeDuplicate.filter((element, index) => {
    return removeDuplicate.indexOf(element) === index;
});

console.log(uniqueChars);