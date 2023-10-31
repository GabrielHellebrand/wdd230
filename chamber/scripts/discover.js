const LAST_VISIT_DATE_KEY = 'last-visit'
const DAY_IN_MILLIS = 24*60*60*1000;

// getting the visit info
function getDiscoverMessage(){
    let message = "I hope you are able to discover new things about Hesperia, apparently we have a zoo and I didn't know that until I made this website."
    let lastVisitValue = localStorage.getItem(LAST_VISIT_DATE_KEY)
    let today = new Date();
    if (lastVisitValue != null){
        lastVisit = parseInt(lastVisitValue)
        daysSinceLastVisit = Math.floor((today.getTime() - lastVisit) / DAY_IN_MILLIS)
        if (daysSinceLastVisit == 0){
            message = "Well you're back, I'm shocked!"
        }
        else{
            if (daysSinceLastVisit == 1){
                message = "You last visited 1 day ago."
            }
            else{
                message = `You last visited ${daysSinceLastVisit} days ago.`
            }
            
        }
    }
    localStorage.setItem(LAST_VISIT_DATE_KEY, `${today.getTime()}`)
    return message;
}


// This displays the message
document.querySelector("Congrats you found me!").textContent = getDiscoverMessage()