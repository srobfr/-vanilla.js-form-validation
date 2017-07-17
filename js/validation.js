function validateNames(firstName, lastName) {       // checks if name fields are not empty and dont contain digits
    const containsNumbers = function(nameToTest) {
        return /[0-9]/.test(nameToTest);
    };

    if (containsNumbers(firstName) || containsNumbers(lastName)) {
        createBubble('Your names cannot contain digits');
        return false;
    } else if (firstName.length === 0 || lastName.length === 0) {
        createBubble ('Name fields cannot be left empty');
        return false;
    }
    return true;
}

function validateTextArea1(firstTextBox) {      // checks if first text field is not empty and shorter than 10 signs
    if (firstTextBox.length > 10) {
        createBubble ('Text box cannot contain more than 10 characters');
        return false;
    } else if (firstTextBox.length === 0) {
        createBubble ('Text box 1 cannot be empty');
        return false;
    }
    return true;
}

function validateTextArea2(secondTextBox) {     // checks if second text field is not empty and longer than 20 signs
    if (secondTextBox.length > 20) {
        createBubble ('Second text box cannot contain more than 20 characters');
        return false;
    } else if (secondTextBox.length === 0) {
        createBubble ('Text box 2 cannot be empty');
        return false;
    }
    return true;
}

// TODO implement RFC822 || RFC2822 if more accurate validation is needed
function validateEmail(mail) {      // checks if mail has no whitespaces, isnt empty, checks if has asd@asd.xy format
    const simpleMailCheck = function(mail) {
        return !(/^.+@.+\..{2,6}$/).test(mail);
    };
    const whitespaceCheck = function(mail) {
      return (/\s/).test(mail);
    };

    if (mail.length === 0) {
        createBubble ('Please provide an e-mail adress');
        return false;
    } else if (whitespaceCheck(mail)) {
        createBubble('Email can\'t have whitespaces');
        return false;
    } else if (simpleMailCheck(mail)) {
        createBubble ('Email not correct');
        return false;
    }
    return true;
}

// alternative solution to consider: pattern with regexp
function validatePass(password) {        // checks if password has at least one letter, digit and special sign and is at least 8 characters long
    const hasAnyLetter = function(stringToTest) {
        return !(/[a-z]+/ig).test(stringToTest)
    };
    const hasAnyNumber = function(stringToTest) {
        return !(/[\d]+/.test(stringToTest));
    };
    const hasAnySpecial = function(stringToTest) {
        return !(/[!@#$%^&*()/\\}\[\].{,'";:|=+_\-?><~`]+/).test(stringToTest);
    };

    if (password.length < 8) {
        createBubble ('Password must be at least 8 letters long');
        return false;
    } else if (hasAnyLetter(password)) {
        createBubble ('Password must contain at least 1 letter');
        return false;
    } else if (hasAnyNumber(password)) {
        createBubble ('Password must contain at least 1 digit');
        return false;
    } else if (hasAnySpecial(password)) {
        createBubble ('Password must contain at least 1 special sign');
        return false;
    }
    return true;
}

function validateVID(vidNumber) {       // checks if vid contains only between 1 and 5 digits and isn't empty
    const checkVID = function(number) {
        return !(/^[\d]{1,5}$/.test(number));
    };

    if (vidNumber.length === 0) {
        createBubble('VID field cannot be left empty');
        return false;
    } else if (checkVID(vidNumber)) {
        createBubble('VID number can only contain 1 to 5 digits');
        return false;
    }
    return true;
}

function validateAmount(ticketsAmount) {        // checks if ticket amount field isn't empty, value is less than 20 and has only digits
    const checkIfNumbers = function(number) {
        return !(/^[\d]{1,2}$/.test(number));
    };

    if (ticketsAmount.length === 0) {
        createBubble ('Fill in the ticket amount');
        return false;
    } else if (ticketsAmount > 20) {
        createBubble ('You can only buy 20 tickets at once');
        return false;
    } else if (ticketsAmount < 1 || checkIfNumbers(ticketsAmount)) {
        createBubble ('Incorrect ticket amount');
        return false;
    }
    return true;
}

function saveToLocalStorage() {
    const formArray = [
        'first_name',
        'last_name',
        'textarea_1',
        'textarea_2',
        'email',
        'password',
        'vid_number',
        'tickets_count'
    ];
    for (let x = 0; x < formArray.length; x++) {        // Gets every field from form and saves it as a pair field:value
        localStorage.setItem(formArray[x], document.getElementsByName(formArray[x])[0].value);
    }
    createBubble('FORM SENT!');
    return true;
}

function validateForm() {
    if (
    !validateNames(document.getElementsByName('first_name')[0].value, document.getElementsByName('last_name')[0].value) ||
    !validateTextArea1(document.getElementsByName('textarea_1')[0].value) ||
    !validateTextArea2(document.getElementsByName('textarea_2')[0].value) ||
    !validateEmail(document.getElementsByName('email')[0].value) ||
    !validatePass(document.getElementsByName('password')[0].value) ||
    !validateVID(document.getElementsByName('vid_number')[0].value) ||
    !validateAmount(document.getElementsByName('tickets_count')[0].value) ) {
        return false;

    } else {
        saveToLocalStorage();
        return true;
    }
}