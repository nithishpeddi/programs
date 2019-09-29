
function insert(str1, str2, n) {
    var res = '';

    if (typeof n === 'undefined' && typeof str2 === 'string') {
        res = str2 + str1;
        return res;
    }
    if (typeof n === 'undefined') {
        res = str1;
        return res;
    }
    else {
        res = str1.substr(0, n) + str2 + str1.slice(n);
    }
    return res;
};


// console.log(insert('We are doing some exercises.')); 
//console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));