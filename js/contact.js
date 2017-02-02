// Contact Form Scripts

$(function() {

    var lookup = {};
    lookup["email"] = {
        regex : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        tip : new Tooltip("invalid email")
    };

    var noErrors = true;

    var contact_form = $("#contact");

    contact_form.find("input, textarea").blur(onBlur);

    function onBlur(event){

        if(!event){
            return;
        }

        let lookupEntry = lookup[event.target.id];

        if(!lookupEntry){

            noErrors = noErrors & true;

            return;

        }

        let regex = lookupEntry.regex;

        if(regex.test(event.target.value)){

            lookupEntry.tip.hide();

            noErrors = noErrors & true;

        } else {

            lookupEntry.tip.type('error').effect('fade');
            lookupEntry.tip.show(event.target);

            noErrors = false;

        }

    }

    contact_form.submit(function(e){
        
        e.preventDefault();
        e.stopPropagation();

        noErrors = true;

        contact_form.find("input, textarea").blur();

        if(noErrors){


            let name = "name";
            let phone = "phone";
            let email = "ivomontigatti@gmail.com";
            let message = "message";
            
            $.ajax({
                url: 'index.php',
                method: 'POST',
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },

            }).done(function( data ) {

                console.log(data);

            });

        }


        return false;

    });
    /*
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });


    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

    */
});