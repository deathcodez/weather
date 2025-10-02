const colorpicker= document.getElementById("colorpicker");
const canvascolor=document.getElementById("canvascolor");
const canvas = document.getElementById("mycanvas")
const clearbutton=document.getElementById("clearbutton")
const savebutton = document.getElementById("savebutton");
const fontsize=document.getElementById("fontsize")
const rtv=document.getElementById("retrivebutton")
const ctx=canvas.getContext("2d")
colorpicker.addEventListener("change",(e)=>{
    ctx.strokeStyle=e.target.value;
    ctx.fillStyle=e.target.value;
})
canvas.addEventListener("mousedown",(e)=>{
    isDrawing=true;
    lastX=e.offsetX
    lastY=e.offsetY
})
canvas.addEventListener("mousemove",(e)=>{
    if (isDrawing) {
        
         ctx.beginPath()
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
     lastX=e.offsetX
    lastY=e.offsetY
    }
   canvas.addEventListener("mouseup",()=>{
    isDrawing=false;
   })
   canvascolor.addEventListener("change",(e)=>{
    ctx.fillStyle=e.target.value;
    ctx.fillRect(0,0,800,500)

   })

})
savebutton.addEventListener("click", () => {
    localStorage.setItem("canvascontent", canvas.toDataURL());  // unified key
    let link = document.createElement("a");
    link.download = "mycanvas.png";
    link.href = canvas.toDataURL();
    link.click();
});

rtv.addEventListener("click", () => {
    let savedcanvas = localStorage.getItem("canvascontent"); // same key here
    if (savedcanvas) {
        let img = new Image();
        img.src = savedcanvas;
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    } else {
        alert("No saved canvas found!");
    }
});
   fontsize.addEventListener("change",(e)=>{ctx.lineWidth=e.target.value})

clearbutton.addEventListener("click",()=>{ctx.clearRect(0,0,canvas.width,canvas.height)})