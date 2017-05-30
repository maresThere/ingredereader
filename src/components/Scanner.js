import React, { Component } from 'react'
import Quagga from 'quagga'
import Search from './Search'
import beep from '../beep'

class Scanner extends Component {
  state = {
    results: [],
    bestResult: null
  }

  init () {
    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints: {
          width: 640,
          height: 480,
          facingMode: 'environment' // or user
        }
      },
      area: { // defines rectangle of the detection/localization area
        top: '15%',    // top offset
        right: '15%',  // right offset
        left: '15%',   // left offset
        bottom: '15%'  // bottom offset
      },
      locator: {
        patchSize: 'x-large'
        // halfSample: true
      },
      numOfWorkers: 4,
      decoder: {
        readers: [ 'upc_reader' ]
      },
      locate: true
    }, function (err) {
      if (err) {
        return console.log(err)
      }
      Quagga.start()
    })
  }

  componentDidMount () {
    navigator.mediaDevices.getUserMedia({ video: true }).then(() => {
      this.init()
    })
    Quagga.onProcessed(function (result) {
      const drawingCtx = Quagga.canvas.ctx.overlay
      const drawingCanvas = Quagga.canvas.dom.overlay
      const width = parseInt(drawingCanvas.getAttribute('width'))
      const height = parseInt(drawingCanvas.getAttribute('height'))
      drawingCtx.clearRect(0, 0, width, height)
      if (result) {
        if (result.boxes) {
          result.boxes.filter(function (box) {
            return box !== result.box
          }).forEach(function (box) {
            Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2})
          })
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: '#44f', lineWidth: 2})
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3})
        }
      }
      drawingCtx.strokeStyle = 'red'
      drawingCtx.lineWidth = 2
      drawingCtx.beginPath()
      drawingCtx.strokeRect(width * 0.15, height * 0.15, width - width * 0.3, height - height * 0.3)
    })
    Quagga.onDetected(this._onDetected)
  }

  componentWillUnmount () {
    Quagga.offDetected(this._onDetected)
  }

  _click = (e) => {
    Quagga.stop()
  }

  _clickOn = () => {
    this.init()
  }

  _onDetected = (result) => {
    this.setState({
      results: [result.codeResult.code, ...this.state.results.slice(0, 20)]
    }, () => {
      console.log(this.state.results)
      this.updateBestResult()
    })
  }

  updateBestResult () {
    const results = this.state.results.slice()
    if (results.length > 10) {
      const bestResult = results.sort((a, b) =>
        results.filter(v => v === a).length -
        results.filter(v => v === b).length
      ).pop()
      this.setState({ bestResult })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.bestResult !== this.state.bestResult) {
      beep()
    }
  }

  render () {
    return <div className='Scanner'>
      <div id='interactive' className='viewport' />
      <h2>{this.state.bestResult}</h2>
      <Search query={this.state.bestResult} />
      <button onClick={this._click}>Stop</button>
      <button onClick={this._clickOn}>Scan</button>
    </div>
  }
}

export default Scanner
