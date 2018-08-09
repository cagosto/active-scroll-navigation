# Scrolling Active Navigation

## Whats This

This is a plain JavaScript Class that changes the active navigation item while the user scroll up/down the page.  It has options for active class name and scroll offset.  You can also turn the event listener for window scroll on and off if need along with retrieving the active item index.

## Demo Link

[https://codepen.io/Cagosto/pen/opwJoK](https://codepen.io/Cagosto/pen/opwJoK)

## Installation

Get if from npm

`npm i active-scroll-navigation`

import it in your app

`import ACTIVE_SCROLL from 'active-scroll-navigation'`

## How to use
```
new ACTIVE_SCROLL({
  nav: '.main-nav'
  offSet: 0,
  activeString: 'main-nav__item—active'
});
```

### Settings
Name  | Type  | Required | Value
------|-------|----------|
nav   | String  |  True | ""
offSet  | Num  |  False | 0
activeString  | String   | True  | main-nav__item--active  

### Get Active Index
```
const activeScroll = new ACTIVE_SCROLL();
let index = activeScroll.activeItem();
```

### Events
```
const activeScroll = new ACTIVE_SCROLL();

activeScroll.eventsSrollOff() //Stop Scroll Listener

activeScroll.eventsSroll() //Start Scroll Listener
```
