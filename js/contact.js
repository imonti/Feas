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

        $("#contact-submit").prop('disabled', true);
        $("#contact-submit").text('Enviando');

        contact_form.find("input, textarea").blur();

        if(noErrors){

            let name = $("#name").val();
            let phone = $("#phone").val();
            let email = $("#email").val();
            let message = $("#message").val();
            
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

                //$("#contact-submit").prop('disabled', false);
                $("#contact-submit").addClass('used', false);
                $("#contact-submit").text('Mensaje Enviado!');

                /*
                if(data == "1"){
                    console.log("its a text");
                }
                */

            });

        }


        return false;

    });
});