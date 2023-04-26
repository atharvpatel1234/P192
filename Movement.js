AFRAME.registerComponent("player-movement",{
init:function(){
  this.movement() ;
},

movement:function(){
    var zPos=0;
    window.addEventListener('keydown',function(e){
        var man=document.querySelector("#man-running")
        var camerapos=this.document.querySelector("#bg")
        var cameraposition=camerapos.getAttribute("position")
        var manpos=man.getAttribute("position")
        var cameramov=camerapos.getAttribute("movement-controls")
        xPos=manpos.x
        yPos=manpos.y
        zPos=manpos.z
        
        if(e.code=="ArrowUp"){

            zPos-=0.01
            camerapos.setAttribute("movement-controls",{"speed":cameramov.speed+0.9})
            man.setAttribute("position",{
                x:xPos,
                y:yPos,
                z:zPos
            })
            camerapos.setAttribute("position",{
                x:cameraposition.x,
                y:cameraposition.y,
                z:cameraposition.z-0.009
            })
            var scoree=document.querySelector("#score")
            var valueel=scoree.getAttribute("text",value)
            valueel+=1
            scoree.setAttribute("text",valueel)
        }

        if(e.code=="ArrowRight"){
            xPos+=0.01
            man.setAttribute("position",{
                x:xPos,
                y:yPos,
                z:zPos
            })
        }

        if(e.code=="ArrowLeft"){
            xPos-=0.01
            man.setAttribute("position",{
                x:xPos,
                y:yPos,
                z:zPos
            })
        }

    })
}

})