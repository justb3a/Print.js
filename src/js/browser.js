const Browser = {
  // Firefox 1.0+
  isFirefox: function() {
  // isFirefox: () => {
    return typeof InstallTrigger !== 'undefined'
  },
  // Internet Explorer 6-11
  isIE: function() {
  // isIE: () => {
    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode
  },
  // Edge 20+
  isEdge: function() {
  // isEdge: () => {
    return !Browser.isIE() && !!window.StyleMedia
  },
  // Chrome 1+
  isChrome: function() {
  // isChrome: () => {
    return !!window.chrome && !!window.chrome.webstore
  },
  // At least Safari 3+: "[object HTMLElementConstructor]"
  isSafari: function() {
  // isSafari: () => {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ||
        navigator.userAgent.toLowerCase().indexOf('safari') !== -1
  }
}

export default Browser

