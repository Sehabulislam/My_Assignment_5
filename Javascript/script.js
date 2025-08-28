//reuseable function call
function getElement (id){
    const element = document.getElementById(id);
    return element;
}
//count heart function
document.getElementById('card-container').addEventListener('click', function(e){
    if(e.target.className.includes('heart-btn')){
        const cardBtn = e.target;
        const presentHeart = getElement('heart').innerText;
        const currentHeart = Number(presentHeart) + 1;
        getElement('heart').innerText = currentHeart ;
    }
 })



getElement('card-container').addEventListener('click',function(e){
    if(e.target.className.includes('call-btn')){
        const callBtn = e.target;
        // Call btn er Title and Number 
        const callerTitle = callBtn.parentNode.parentNode.children[0].innerText;
        const callerNumber = callBtn.parentNode.parentNode.children[2].innerText;
        // Call alert 
        alert("📞"+ " " + 'Calling ' + callerTitle + ' ' + callerNumber+ " " + '.....')
        //Time set 
        const time = new Date().toLocaleTimeString()
        // Call History Add 
        const callHistory = getElement('call-history');

        const newCall = document.createElement('div');
        newCall.innerHTML = `
        <div class="bg-gray-100 h-auto p-4 mt-4 rounded-xl flex justify-between items-center">
                    <div>
                        <h1 class="text-lg font-bold">${callerTitle}</h1>
                    <p class="text-lg font-semibold text-gray-700">${callerNumber}</p>
                    </div>
                    <div>
                        <p id="time" class="text-lg">${time}</p>
                    </div>
                  </div>
        `
        callHistory.append(newCall)

    }
})
// Call History Clear 
getElement('clear-history').addEventListener('click',function(){
            const callHistory = getElement('call-history');
            callHistory.innerHTML = ""; 
})