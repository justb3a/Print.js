import { addHeader } from './functions'
import Print from './print'

export default {
  print: function(params, printFrame) {
    // Create the image element
    var img = document.createElement('img')

    // Set image src with image file url
    img.src = params.printable

    // Load image
    img.onload = function() {
      img.setAttribute('style', 'width:100%;')
      img.setAttribute('id', 'printableImage')

      // Create wrapper
      var printableElement = document.createElement('div')
      printableElement.setAttribute('style', 'width:100%')
      printableElement.appendChild(img)

      // Check if we are adding a header for the image
      if (params.header) {
        addHeader(printableElement, params.header, params.headerStyle)
      }

      // Store html data
      params.htmlData = printableElement.outerHTML

      // Print image
      Print.send(params, printFrame)
    }
  }
}
