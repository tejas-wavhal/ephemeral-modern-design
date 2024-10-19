window.addEventListener("load", () => {
  setTimeout(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main-page"),
      smooth: true,
    });
  }, 0);
});

gsap.from("a", {
  duration: 1,
  y: 20,
  opacity: 0,
  stagger: 0.2,
  ease: "Power3.easeOut",
});

Shery.textAnimate("#main-headings h1", {
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from("#hero-section", {
  y: 50,
  stagger: 0.3,
  duration: 1,
  opacity: 0,
  ease: "Power4.easeOut",
});

Shery.imageEffect(".hero-section-main img", {
  style: 3,
  config: {
    uFrequencyX: { value: 11.57, range: [0, 100] },
    uFrequencyY: { value: 4.96, range: [0, 100] },
    uFrequencyZ: { value: 45.45, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 18.7 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.56, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#sustain-img, #sea-img, #cloud-img", {
  style: 5,
  config: {
    a: { value: 1.83, range: [0, 30] },
    b: { value: -0.92, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.43, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from(".hero-section-main img, #sustain-img", {
  y: "70",
  opacity: 0,
  duration: 3,
  ease: "Expo.easeOut",
});

Shery.imageEffect("#gooey", {
  style: 5,
  gooey: true,
  config: {
    a: { value: 2.52, range: [0, 30] },
    b: { value: 0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.7272727272727273 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.82, range: [1, 15] },
    durationOut: { value: 0.92, range: [0.1, 5] },
    durationIn: { value: 1.22, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.18, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.76, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 33 } },
    discard_threshold: { value: 0.72, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.37, range: [0, 2] },
    noise_scale: { value: 16.03, range: [0, 100] },
  },
});

document.querySelector("button").addEventListener("mouseover", () => {
  gsap.to("video", {
    opacity: 1,
    duration: 1,
    ease: "Power3.easeOut",
  });
});

document.querySelector("button").addEventListener("mouseleave", () => {
  gsap.to("video", {
    opacity: 0,
  });
});
