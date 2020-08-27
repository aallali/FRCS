/*
NOTE : during the execution time, do not make any interaction with the active window, it may cause a script interuption , or crash
NOTE2 : you can switch the tab if you want , the script will still running in background.
NOTE3 : type  "kh_spot()" ,  to check how many requests canceled and remaining.
NOTE4 : Contact me for any useful contribution :) 
*/


/* we go through all the requests page to the end so we have a full list of friend requests by an interval of 2 seconds*/
var fetchAllList = setInterval(function() {
    /* check if the "See more requests" exists then click it*/
    if (document.querySelector('a.uiBoxLightblue')) {
        document.querySelector('a.uiBoxLightblue').click()

    } else { /* if no "See more requests" element exists anymore thats mean we reached the bottom of the page */
        console.log('we reached the bottom of the list section.')
        console.log('Start canceling...')
        /* clear the interval first to avoid perma loop */
        clearInterval(fetchAllList);
        /* we say BISMILLAH and we start the script */
        kh_fetch_elems()
    }
}, 2000)


/* declare needed variables */
let counter = 0;
let btns, newBtn;


/* just simple function to display the canceled request /  total of requests */
function kh_spot() {
    console.log(counter + '/' + btns.length)
    console.log(`Remaining : ${btns.length - counter}`)
    return;
}

function kh_fetch_elems() {
    /* fetch all friend requests buttons */
    btns = document.querySelectorAll('*[data-cancelref="outgoing_requests"]');
    newBtn = []

    /* fetch store each btn element in new array */
    btns.forEach(el => {
        newBtn.push(el)
    })

    /* calculate the estimated time by giving ~ 4 seconds to each task to avoid facebook spam ban */
    console.log(`Estimated time : ${parseFloat((newBtn.length * 4) / 60).toFixed(2)} minutes ...`)

    /* send the new array created to task function */
    kh_auto_cancel(newBtn)

    /* 
        btns stays fixed 
        newBtn changes becues we sent to obj itseld to the function

    */
}

/* the auto canceling function tacking array of btn element */
function kh_auto_cancel(arr) {
    /* check if the array if  empty before excute the code */
    if (arr.length != 0) {

        /* 
            click the first button in the array to display 
            the drop down of choice so we can click the final cancel button
        */
        arr[0].click();

        /* wait 1 second to full load the drop down elements before click the "Cancel request" */
        setTimeout(() => {
            /* check if the  "Cancel request" exist then click ot */
            if (document.querySelector('[data-label="Cancel request" i]')) {
                document.querySelector('[data-label="Cancel request" i]').click()

                /* wait 3 seconds before going to next request */
                setTimeout(() => {
                    /* augment the counter variable that count all canceled requests*/
                    counter++;

                    /* arr.shift() remove the first element of the array so use the new array with next btn in top of the arr*/
                    arr.shift()
                    /* call the same function again `recursion` */
                    kh_auto_cancel(arr)
                }, 1 /* Secs */ * 4000 /* MS */ )
            } else { /* in case of the "Cancel request" elm doesnt exsts or not fully loaded we give it one last chance without shift the original arr */
                setTimeout(() => {
                    kh_auto_cancel(arr)
                }, 1 /* Secs */ * 3000 /* MS */ )
            }
        }, 1 /* Secs */ * 1000 /* MS */ )
    } else {
        /* in case of the array empty , which means all button has been handled (some buttons may be skipped ) */
        console.log(`${counter} friend requests has been canceled`)
        console.log('We are done :D i think , if any accounts still there, just reload the page and launch the code again . cheers ')
        console.log('by  %c @allaliabdullah ', 'background: #0090c7; color:  #FFFFFF; font-weight: bold;font-size:15px');
    }
}
