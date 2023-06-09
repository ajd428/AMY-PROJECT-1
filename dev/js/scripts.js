//import { gsap } from "gsap";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(TextPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

const mainTL = gsap.timeline();
mainTL.fromTo("#single-sprout", {drawSVG:"0%"}, {duration:1, drawSVG: "100%"})

.to("#single-sprout", {duration:1, morphSVG:"#leaf-sprout", fill: "#3D5A34"})
.to("#single-sprout", {duration:1, morphSVG:"#vector-1, #vector-2, #vector-3, #vector-4"})
.to("#single-sprout", {duration:1, morphSVG:"#vase"})
.to("#single-sprout", {duration:1, morphSVG:"#plant"})

.to("#single-sprout", {fill:"#FF93B3", stroke:"#FF93B3"})
.to("#the-t", {duration:.5, autoAlpha:1, fill:"#FF93B3", stroke:"#FF93B3"}, "<")
.to("#single-sprout, #the-t", {fill:"#FCB140", stroke:"#FCB140"})
.to("#the-h", {duration:.5, autoAlpha:1, fill:"#FCB140", stroke:"#FCB140"},"<")
.to("#single-sprout, #the-t, #the-h", {fill:"#98B66B", stroke:"#98B66B"})
.to("#the-e", {duration:.5, autoAlpha:1, fill:"#98B66B", stroke:"#98B66B"}, "<")

.to("#b", {duration:.5, autoAlpha:1})
.to("#single-sprout",{fill:"#FCB140", stroke:"#FCB140"},"<" )
.to("#the-t, #the-h, #the-e",{fill:"#FCB140", stroke:"#FCB140"},"<" )

.to("#o", {duration:.5, autoAlpha:1})
.to("#single-sprout", {fill:"#98B66B", stroke:"#98B66B"}, "<")
.to("#the-t, #the-h, #the-e",{fill:"#98B66B", stroke:"#98B66B"},"<" )

.to("#t", {duration:.5, autoAlpha:1})
.to("#single-sprout",{fill:"#FF93B3", stroke:"#FF93B3"},"<" )
.to("#the-t, #the-h, #the-e",{fill:"#FF93B3", stroke:"#FF93B3"},"<" )

.to("#a1", {duration:.5, autoAlpha:1})
.to("#single-sprout",{fill:"#FCB140", stroke:"#FCB140"},"<" )
.to("#the-t, #the-h, #the-e",{fill:"#FCB140", stroke:"#FCB140"},"<" )

.to("#n", {duration:.5, autoAlpha:1})
.to("#single-sprout", {fill:"#98B66B", stroke:"#98B66B"}, "<")
.to("#the-t, #the-h, #the-e",{fill:"#98B66B", stroke:"#98B66B"},"<" )

.to("#c", {duration:.5, autoAlpha:1})
.to("#single-sprout",{fill:"#FF93B3", stroke:"#FF93B3"},"<" )
.to("#the-t, #the-h, #the-e",{fill:"#FF93B3", stroke:"#FF93B3"},"<" )

.to("#a2", {duration:.5, autoAlpha:1})
.to("#single-sprout",{fill:"#FCB140", stroke:"#FCB140"},"<" )
.to("#the-t, #the-h, #the-e",{fill:"#FCB140", stroke:"#FCB140"},"<" )

.to("#l", {duration:.5, autoAlpha:1})
.to("#single-sprout", {fill:"#98B66B", stroke:"#98B66B"}, "<")
.to("#the-t, #the-h, #the-e",{fill:"#98B66B", stroke:"#98B66B"},"<" )


//.to("#the-t", {duration:1, autoAlpha:0, fill: "#98B66B"})
;


GSDevTools.create();


//splitColor()
//ease: Power2.easeInOut