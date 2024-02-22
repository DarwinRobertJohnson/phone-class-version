
class phone {

    call(){
        $("#output").text(`called ${this.type}`);
    }

    message(){
        $("#output").text(`messaged ${this.type}`);
    }

    setVisible(className,visible=true){
        if(visible){
            $(`.${className}`).css({
                "visibility":"visible",
            })
        }
            else{
                $(`.${className}`).css({
                    "visibility":"hidden",
                })
            }
        }

    doOperation(operation){
        if(operation=="call")
             this.call()
        if(operation=="message")
             this.message()
    }

    showOperation(){
        let operation=null;
        this.setVisible("operation");       
        $(".operation input").click(()=>{
            operation=$(".operation input:checked").val();
             this.doOperation(operation);
        })
        
    }
}


class smartPhone extends phone{
    constructor(type="smart"){
        super();
        this.type=type;
    }

    makeSmartPhone(){
        this.setVisible("smart",true);
        this.setVisible("basic",false);
        this.setVisible("operation",false);

        $(".smart input").click(()=>{
            this.osType= $(".smart input:checked").val();

            this.showOperation();
    });
}
}


class basicPhone extends phone{
    constructor(type="basic"){
        super();
        this.type=type;
    }

    makeBasicPhone(){

        this.setVisible("basic",true);
        this.setVisible("smart",false);
        this.setVisible("operation",false);
        
        $(".basic").click(()=>{
        this.simSlots= $(".basic input:checked").val();

        this.showOperation();
    });
    }
}


/*
    Program Start
*/

let phoneObject=null;
let output=""
$("#phone-type input").click(()=>{
    phoneType=$("#phone-type input:checked").val()
    if(phoneType=="smart"){
        phoneObject=new smartPhone();
        phoneObject.makeSmartPhone();
    }
    else{
        phoneObject=new basicPhone();        
        phoneObject.makeBasicPhone();
    }
});
