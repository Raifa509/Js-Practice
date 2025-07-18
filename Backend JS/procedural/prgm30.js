// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for (row = 1; row <= 5; row++) {
    str = ''
    for (col1 = 1; col1 <= row; col1++) {
        str += "* "
    }
    console.log(str)
}
for (row = 4; row >= 1; row--) {
    str = ''
    for (col2 = 1; col2 <= row; col2++) {
        str += "* "
    }
    console.log(str)
}

console.log('------------------');

//         *
//      *     * 
//   *     *     *
//*     *     *     *
//   *     *     *
//      *     *
//         *

for (row = 1; row <= 4; row++) {
    str = ""
    for (space = 4; space > row; space--) {
        str += "  "
    }
    for (col = 1; col <= row; col++) {
        str += " *  "
    }
    console.log(str);
}
for(row=3;row>0;row--)
{
    str=""
    for(space=4;space>row;space--)
    {
        str += "  "
    }
    for (col = 1; col <= row; col++) {
        str += " *  "
    }
    console.log(str);
}