var bannerAnimate = new TimelineLite();
bannerAnimate
	.to(".banner h1", 1, { opacity: 1 })
	.to(".banner .banner-copy", 1, { opacity: 1, scale: 1 }, .25);


var logoAnimate = new TimelineLite();
logoAnimate
	.to("#logo_black #_Group_2", .75, { delay: 0.5, fill: "#1dffbb", ease: Power4.easeIn})
	.to("#logo_black #_Group_", .75, { fill: "#ef343d", ease: Power4.easeIn}, .75)
	.to("#logo_black .logo-dot", .5, {opacity: 1})
	.to("#logo_black .logo-dot2", .5, {opacity: 1}, 1.75);



var aboutTimeline = new TimelineMax()
.to("#intro .right-panel", .5, { backgroundPosition: "right bottom", ease: Power1.easeOut})
.to("#intro span.line", .25, { width: "300px" })
//.to("#contact span.line", .5, { opacity: 0 })
.to("#intro span.line2", .25, { width: "300px" })
.to("#intro .text-line h1", .25, { opacity: 1 }, "-=.25")
.to("#intro .the-content", .25, { opacity: 1, y: 0});

var aboutController = new ScrollMagic.Controller();
// build scene
var aboutScene = new ScrollMagic.Scene({
	triggerElement: "#trigger-about",
	//duration: 300
})
.setTween(aboutTimeline) // trigger a TweenMax.to tween
//.addIndicators({ name: "1 (duration: 0)"})
.addTo(aboutController);



var timeline = new TimelineMax()
//.to("#skills-experience", 0.5, {opacity: 1, scale: 1})
.to("#skills-experience", 1, {backgroundPosition: "left bottom", ease: Power1.easeOut});
//.to("#skills-rect", .5, {fill : "#1dffbb"});
//.from("#green-pen", 0.5, {scaleY:0, transformOrigin:"right center"});
//.to("#skills-experience .right-panel", .5, { backgroundPosition: "right bottom", ease: Power1.easeOut});

var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({
	triggerElement: "#trigger-skills",
	//duration: 300
})
.setTween(timeline) // trigger a TweenMax.to tween
//.addIndicators({ name: "2 (duration: 0)"})
.addTo(controller);


var capabilitiesTimeline = new TimelineMax()
.to("#capabilities", 1, { backgroundPosition: "right bottom", ease: Power1.easeOut});

var capabilitiesController = new ScrollMagic.Controller();
// build scene
var capabilitiesScene = new ScrollMagic.Scene({
	triggerElement: "#trigger-capabilities",
	//duration: 300
})
.setTween(capabilitiesTimeline) // trigger a TweenMax.to tween
//.addIndicators({ name: "3 (duration: 0)"})
.addTo(capabilitiesController);


var contactTimeline = new TimelineMax()
//.to("#contact .left-panel", .5, { backgroundPosition: "right bottom", ease: Power1.easeOut})
.to("#contact span.line", .5, { width: "300px" })
//.to("#contact span.line", .5, { opacity: 0 })
.to("#contact span.line2", .5, { width: "300px" })
.to("#contact .text-line h3", .25, { opacity: 1 }, "-=.5")
.to("#contact .text-line p", .5, { opacity: 1, y: 0});

var contactController = new ScrollMagic.Controller();
// build scene
var contactScene = new ScrollMagic.Scene({
	triggerElement: "#trigger-contact",
	//duration: 300
})
.setTween(contactTimeline) // trigger a TweenMax.to tween
//.addIndicators({ name: "4 (duration: 0)"})
.addTo(contactController);

