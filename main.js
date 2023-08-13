function carouselScroll() {
    const image_1 = document.getElementById('_1');
    const image_2 = document.getElementById('_2');
    const image_3 = document.getElementById('_3');
    const image_4 = document.getElementById('_4');
    const parent_divider = document.getElementById('parent_divider');
    const _event_listener = document.getElementById('invisible_event_listener');
    _event_listener.addEventListener('mouseover', (event) => {
        //image_1.style.transform = "translateX(-57vw)";
        //image_1.style.transition = "transform 3s";
        //image_2.style.transform = "translateX(-30vw)";
        //image_2.s
        //alert('This is working!');
        parent_divider.style.transform = "translateX(-100vw)";

        parent_divider.style.transition = "all 8s";

        parent_divider.style.animationName = "scrollBack";
        parent_divider.style.animationDuration = "8s";
        parent_divider.style.animationDelay = "9s";

        //parent_divider.style.animationName = "imagesFlip";
        //parent_divider.style.animationDelay = "8.1s";
        //parent_divider.style.animationDirection = "8s";
        //parent_divider.style.animationFillMode = "forwards";
    });

    _event_listener.addEventListener('mouseout', (event) => {
        parent_divider.style.transform = "translateX(0)";
    });
}

function onclick_contact_us_button() {
//    var query_dialog = document.getElementById('query_dialog');

//    query_dialog.animate([
//        { opacity: '0', top: '100px' },
//        { opacity: '1', top: '10px' },
//    ], {fill: "forwards", duration: 1000, easing} );
const contact_button = document.getElementById('contact_button');

    contact_button.style.background = "white";
    contact_button.style.color = "black";
    contact_button.style.transition = "all 0.1s";
    window.location.assign('/contact.html');
}

function onclick_submit_button() {
    var submit_button = document.getElementById('submit_button');

    var name_input_field = document.getElementById('__name_input_field');
    var email_input_field = document.getElementById('__email_input_field');
    var phone_input_field = document.getElementById('__phone_input_field');
    var message_box = document.getElementById('__message_box');

    submit_button.style.background = "white";
    submit_button.style.border = "solid 0.25px black";
    submit_button.style.color = "black";

    Email.send({ Host : "smtp.elasticemail.com", Username : "ahmedzunair@hotmail.co.uk", Password : "C10A24E484BBCA9D84C635CA50E2EDDBBF40", To : 'ahmedzulfiquar@hotmail.com', From : "ahmedzunair@hotmail.co.uk", Subject : "Someone would like to order garments from your company! 🥳", Body : "<html><h2>Name:<span style='color: blue;'> "+name_input_field.value+"</span></h2><h2>Email: <span style='color: blue;'> "+email_input_field.value+"</span></h2><h2>Phone number:<span style='color: blue;'> "+phone_input_field.value+"</span></h2><h5>Message:<span style='color: green;'> "+message_box.value+"</span></h5></html>" }).then( message => alert("Thank you for your message! \n Someone will be in contact with you soon!"));
    //if(emailAdress == '') {
    //    alert('Email adress is required for quotation.');
    //  }
    
    //  else {
    
    //  };
}

function stop_the_carousel() {
    var parent_divider = document.getElementById('parent_divider');

    //parent_divider.style.background = "blue";
    //parent_divider.style.transform = "translate(100px)";
    //parent_divider.style.animationFillMode = "none";
    parent_divider.style.animationPlayState = "paused";
}

function resume_the_carousel() {
    var parent_divider = document.getElementById('parent_divider');

    parent_divider.style.animationPlayState = "running";
}
