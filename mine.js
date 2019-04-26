function Showoutput(value) {
document.getElementById('output').value += value;
}
function tinh() {
    let output= document.getElementById('output').value;
    let kq= eval(output);
    document.getElementById('output').value = kq;
    
}
function clear1() {
document.getElementById('output').value='';

}