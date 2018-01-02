# Scrolling Active Navigation

## Whats This

This is a plain JavaScript Class that change the acitive navition item while the user scroll up/down the page.  It has options for active class name and scroll offset.  You can also turn the event listerer for window scroll on and off if need along with retreaving the active item index.

## Demo Link

[https://codepen.io/Cagosto/pen/opwJoK](https://codepen.io/Cagosto/pen/opwJoK)

### Installation

Get if from npm

`npm i active-scroll-navigation`

import it in your app

`import ACTIVE_SCROLL from 'active-scroll-navigation'`

### How to use

```
new ACTIVE_SCROLL({
	nav: String | '.main-nav' | '#main-nav',
    offSet: Num | default 0,
    activeString: String | default 'main-nav__item—active'
});
```

### Get Active Index

```
	const activeScroll = new ACTIVE_SCROLL();
    activeScroll.activeItem
```

### Toggle Scroll
```
	const activeScroll = new ACTIVE_SCROLL();
    activeScroll.eventsSrollOff() //Stop Scroll Listener
    activeScroll.eventsSroll() //Start Scroll Listener
```
