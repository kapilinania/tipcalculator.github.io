const kali = () => {
   
    let a = new Date();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    min = min < 10 ? '0' + min : min;
    let ampm = hour >= 12 ? 'PM' : 'AM';
    if (hour == 12) {
        hour = 12;
    }
    else {
        hour = hour % 12;
    }
    //let ctime = `${hour} : ${min} : ${sec} ${ampm} `;
      let ctime = `${hour} : ${min}  ${ampm} `;
    //document.getElementById("time").innerHTML = ctime;
   // console.log(ctime)
    document.getElementById('time_data').innerHTML = ctime;
    setTimeout(kali, 1000);
}
kali();

function kapil(){
    let user_bill_data = Number(document.getElementById('user_bill').value);
    console.log(user_bill_data);
    let usertip  = Number(document.getElementById("user15").value);
    console.log(usertip)
    let c = document.getElementById("user_range").value;
    console.log(c)
    document.getElementById("range_data").innerHTML = c;

    let result = (user_bill_data + usertip * c / 100);
    let kali =Math.round(result)
    document.getElementById("per_data").innerHTML  = kali;

    let kali1  =  user_bill_data+usertip;
    document.getElementById("per_data_one").innerHTML  = kali1;
    document.getElementById("per_data_two").innerHTML  = usertip;

}


