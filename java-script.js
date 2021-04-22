function buttonclick(val){
    document.getElementById('cal-screen').value+=val
}
function buttonclear(){
    document.getElementById('cal-screen').value=""
}
function buttonequal(){
    var text=document.getElementById('cal-screen').value
    var Result=eval(text)
    document.getElementById('cal-screen').value=Result
}