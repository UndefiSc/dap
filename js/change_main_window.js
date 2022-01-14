function toggles() {
    this.state = !this.state; 
    this.visibility = this.state ? 'hidden' : 'visible';
    
    if(this.state) {
        open_win();
    } else {
        close_win();
    }
}

function open_win() {
    document.getElementById("change-main-window").style.left = `-20px`;
    document.getElementById("change-main-window").style.backgroundColor = `rgba(0, 0, 0, 0)`;
    document.getElementById("change-main-window").style.color = `rgba(0, 0, 0, 0)`;
    document.getElementById("back-button").style.visibility = `visible`;
    document.getElementById("show_changed_window").style.visibility = `visible`;
}

function close_win() {
    document.getElementById("change-main-window").style.left = `0px`;
    document.getElementById("change-main-window").style.backgroundColor = `#c8d5e9`;
    document.getElementById("change-main-window").style.color = `#396d9e`;
    document.getElementById("back-button").style.visibility = `hidden`;
    document.getElementById("show_changed_window").style.visibility = `hidden`;
}