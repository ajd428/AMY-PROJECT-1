import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, TextPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathHelper);

const mainTL = gsap.timeline();

mainTL.fromTo("#white-m", {drawSVG:"0%"}, {duration:2, drawSVG:"100%"})


;

GSDevTools.create();
