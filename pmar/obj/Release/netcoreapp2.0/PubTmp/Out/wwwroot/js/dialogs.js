function timeoutDemo(mytitle, message , milisec) {
    Metro.dialog.create({
        title: mytitle,
        content: "<div>This dialog will be closed after 3 sec</div>",
        autoHide: milisec
    });
}

function customsDemo(mytitle , message){
    Metro.dialog.create({
        title: mytitle,
        content: "<div>"+ message +"</div>",
        clsDialog: "bg-dark",
        clsTitle: "fg-yellow",
        clsContent: "fg-white",
        clsDefaultAction: "alert"
    });
}

function animateDemo(mytitle, message){
    Metro.dialog.create({
        title: mytitle,
        content: "<div>" + message +"</div>",
        onShow: function(el){
            el.addClass("ani-swoopInTop");
            setTimeout(function(){
                el.removeClass("ani-swoopInTop");
            }, 500);
        },
        onHide: function(el){
            el.addClass("ani-swoopOutTop");
            setTimeout(function(){
                el.removeClass("ani-swoopOutTop");
            }, 500);
        }
    });
}

function actionsDemo(mytitle, message){
    Metro.dialog.create({
        title: mytitle,
        content: "<div>" + message +"</div>",
        actions: [
            {
                caption: "Yes, i'am",
                cls: "js-dialog-close alert",
                onclick: function(){
                    alert("You choose YES");
                }
            },
            {
                caption: "No, thanks",
                cls: "js-dialog-close",
                onclick: function(){
                    alert("You choose NO");
                }
            }
        ]
    });
}
