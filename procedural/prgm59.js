// w.a.p to print all vowels from a given string

sentance='Hai everyone'
sentance=sentance.toLowerCase()
for(let item of sentance)
{
    if('aeiou'.includes(item))
        {
            console.log(item);
            
        }   
}
console.log('-----------------');

// w.a.p to print a given string is palindrome or not

str='MALAYALAM'
str=str.toLowerCase()

reverse=str.split('').reverse().join('')

console.log(reverse==str?'palindrome':'not palindrome');

console.log('-----------------');

