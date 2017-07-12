function assignPlaceholders() {     // swaps html placeholders with custom ones
    const formList = {
        first_name:'First name',
        last_name:'Last name',
        textarea_1:'Text1',
        textarea_2:'Text2',
        email:'email@gmail.com',
        password:'Password',
        vid_number:'VID',
        tickets_count:'1'
    };
    for (let placeholderText in formList) {
        document.getElementsByName(placeholderText)[0].value="";
        document.getElementsByName(placeholderText)[0].placeholder=formList[placeholderText];
    }
}

window.onload = function() {
    assignPlaceholders();
};

