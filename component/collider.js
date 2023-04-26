AFRAME.registerComponent("collider",{
    schema:{
        elementid:{type:"string",default:"#tiger"}
    },

    init:function(){
        this.coillded(this.data.elementid)
    },

    coillded:function(elementid){
        console.log("game1")
        var tigerel=document.querySelector("#tiger")
        var spiderel=document.querySelector("#spider")

        var manel=document.querySelector("man-running")


        manel.addEventListener("collide",(e)=>{
            console.log("game")
            if(elementid.id.includes("#tiger")){
                manel.setAttribute("visible",false)
                tigerel.setAttribute("visible",false)
                var element=document.querySelector("#Game_over_text")
                element.setAttribute("visible",true)
            }

            
        })
    }

})