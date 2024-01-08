
function generateCode(length = 6, includeNumbers = false) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) {
        characters += '0123456789';
    }
    // console.log(characters);

    let code = '';
    // let randomchar;
    for (let i = 0; i < length; i++) {
        // console.log("i:", i);
        // console.log("code:", code);
        randomchar = characters.charAt(Math.floor(Math.random() * characters.length));
        // console.log("randomly generated char:", randomchar);
        // code += randomchar;
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

