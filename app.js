function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark');
    let mode = document.getElementById('mode');
    mode.innerHTML='Light Mode';
    if(!mybody.classList.contains('mydark')){
        mode.innerHTML='Dark Mode';
    }
}