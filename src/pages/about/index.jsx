import React from 'react'
import AboutBanner from '../../components/AboutBanner'
import Collapse from '../../components/Collapse'
import aboutDatas from '../../datas/About.json'

export default function About() {
  return (
    <>
      <AboutBanner />
      {aboutDatas.map((x, id) => (
        <Collapse
          key={id}
          aboutTitle={x.aboutTitle}
          aboutText={x.aboutText}
          aboutStyle="about-style"
        />
      ))}
    </>
  )
}
