function palindromo(string) {
    if (string.split("").reverse().join("")==string) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('arara'));