//import { gsap } from "gsap";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(TextPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

const mainTL = gsap.timeline();
mainTL.fromTo("single-sprout", {drawSVG:"0%"}, {duration:1, drawSVG: "100%"})
.to("#single-sprout", {duration:1, morphSVG:"#leaf-sprout", fill: "#3D5A34"})
.to("#single-sprout", {duration:1, morphSVG:"#vector-1, #vector-2, #vector-3, #vector-4"})
.to("#single-sprout", {duration:1, morphSVG:"#vase"})
.to("#single-sprout", {duration:1, morphSVG:"#plant"})
//.to("#title", {duration:3, opacity:"100%"})
;


GSDevTools.create();