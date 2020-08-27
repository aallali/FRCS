# FRCS

FRCS is a very simple console script in JavaScript to cancel all pending friend requests from your facebook account

## Usage

1 - Go to the [pending request](https://web.facebook.com/friends/requests/?fcref=jwl&outgoing=1) page and open dev console (press F12 or right click then choose 'Inspect Elements')

2 - copy the js code attached to this repo in the console 

3 - hit enter

(you can check how many requests has been canceled by typing the following command )

```bash
console.log(kh_spot())
// display e.g : 13/37 
// 37 : total of pending requests
// 13 : total of canceled requests 
```


4 - wait a message to display, telling you that the script execution has ended

![Displayed image screenshot](https://i.ibb.co/47RZS1D/script-me.png)


```bash
Estimated time : XX minutes ...
```
* it tells you the approximate time needed to cancel all the current requests displayed in the main page

## SOME ARE SKIPPED !!
since the script not very accurate , sometimes it skips some requests due to low load of the elements needed for the operation, the script already handle this case for one time by doing a recursion on the code itself but other cases its ignored ,
its OK , just reload the page and run the scrip again.

## Coming Next
I'm planning to add more features to the script and implement it into a browser extension for fast and simple use.
help with your ideas :)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

##
by : [@allaliabdullah](https://twitter.com/AllaliAbdullah)
 
