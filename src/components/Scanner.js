import React, { Component } from 'react'
import Quagga from 'quagga'
import Search from './Search'
import beep from '../beep'

class Scanner extends Component {
  state = {
    results: [],
    bestResult: null
  }

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
        patchSize: 'large',
        halfSample: true
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

  // _onClick = (e) => {
  //   Quagga.stop()
  // }

  _onDetected = (result) => {
    this.setState({
      results: [...this.state.results, result.codeResult.code]
    }, () => {
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
      <h2>Results, etc..</h2>
      <Search query={this.state.bestResult} />
      <button className='stop'>Stop</button>
    </div>
  }
}

export default Scanner
