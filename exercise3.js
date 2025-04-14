for (let i = 0; i < 8 ; i++) {

    let string = ""

    for (let n = 0; n < 8; n++) {

        if ((i + n) % 2 === 0) {

            string = string + "#"

        }

        else {

            string = string + " "

        }
    }

    console.log(string)
}