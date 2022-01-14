
function toggle() {
    this.state = !this.state; 
    this.innerHTML = this.state ? 'Close' : 'Open';
    
    if(this.state) {
        open();
    } else {
        close();
    }
}

function open() {
        document.getElementById("nav").style.left = `0px`;
        document.getElementById("shadow_button").style.visibility = `visible`;
}

function close() {
        document.getElementById("nav").style.left = `-250px`;
        document.getElementById("shadow_button").style.visibility = `hidden`;
}