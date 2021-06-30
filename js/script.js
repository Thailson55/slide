import { SlidesNav } from "./slide.js";

const slide = new SlidesNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next')
