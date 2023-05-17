import React from 'react'
import { Slide } from 'react-auto-image-slider'
import '../Testimonies/testimonies.css';

export default function Testiomony() {
  return (
    <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
        <div style={{
    textAlign: 'center',
    background: 'red',
    padding: '200px 0',
    fontSize: '30px'
  }}>First Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'orange',
    padding: '200px 0',
    fontSize: '30px'
  }}>Second Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'yellow',
    padding: '200px 0',
    fontSize: '30px'
  }}>Third Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'green',
    padding: '200px 0',
    fontSize: '30px'
  }}>Fourth Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'blue',
    padding: '200px 0',
    fontSize: '30px'
  }}>Sixth Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'indigo',
    padding: '200px 0',
    fontSize: '30px'
  }}>Seventh Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'violet',
    padding: '200px 0',
    fontSize: '30px'
  }}>Eight Slide</div>
    </Slide>
  )
}
