importScripts("/wb-assets/precache-manifest.4856fe23d2c39b6f716524e779d4e7be.js", "/wb-assets/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/wb-assets/workbox-v4.3.1"});
/* eslint-disable no-undef */
const SkipWaitingAndClaim = () => {
  workbox.skipWaiting()
  workbox.clientsClaim()
}

const hideLogs = () => {
  workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent)
}

const precacheAndRoute = () => {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
}

const handleJsFiles = () => {
  //cache js files from third paty domains with 7 days expiration
  workbox.routing.registerRoute(
    new RegExp(".+\\.js$"),

    workbox.strategies.cacheFirst({
      cacheName: "js-cache-files",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60 //
        })
      ]
    })
  )
}

const handleCssFiles = () => {
  //cache css files from third paty domains with 7 days expiration

  workbox.routing.registerRoute(
    new RegExp(".+\\.css$"),

    workbox.strategies.cacheFirst({
      cacheName: "css-cache-files",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60 //
        })
      ]
    })
  )
}

const handlePngfiles = () => {
  //cache png files from third paty domains with 7 days expiration

  workbox.routing.registerRoute(
    new RegExp(".+\\.png$"),

    workbox.strategies.cacheFirst({
      cacheName: "png-cache-files",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60 //
        })
      ]
    })
  )
}

const navigationFallBack = () => {
  self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") {
      return
    }

    if (event.request.mode === "navigate") {
      event.respondWith(caches.match("index.html"))
      return
    }
  })
}
console.log("sd")
hideLogs()
navigationFallBack()
handleCssFiles()
handleJsFiles()
handlePngfiles()
SkipWaitingAndClaim()
precacheAndRoute()

