import React, { Component } from 'react'
import Quagga from 'quagga'

class Scanner extends Component {
  componentDidMount () {
    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints: {
          width: 640,
          height: 480,
          facingMode: 'environment' // or user
        }
      },
      locator: {
        patchSize: 'medium',
        halfSample: true
      },
      numOfWorkers: 4,
      decoder: {
        readers: [ 'ean_reader' ]
      },
      locate: true
    }, function (err) {
      if (err) {
        return console.log(err)
      }
      Quagga.start()
    })
    Quagga.onProcessed(function (result) {
      const drawingCtx = Quagga.canvas.ctx.overlay
      const drawingCanvas = Quagga.canvas.dom.overlay

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')))
          result.boxes.filter(function (box) {
            return box !== result.box
          }).forEach(function (box) {
            Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2})
          })
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: '#00F', lineWidth: 2})
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3})
        }
      }
    })
    Quagga.onDetected(this._onDetected)
  }

  componentWillUnmount () {
    Quagga.offDetected(this._onDetected)
  }

  _onDetected = (result) => {
    console.log('detected:', result.codeResult.code)
    // DO API query and handle results from that...
  }

  render () {
    return <div className='Scanner'>
      <div id='interactive' className='viewport' />

      <h2>Results, etc..</h2>
    </div>
  }
}

export default Scanner
