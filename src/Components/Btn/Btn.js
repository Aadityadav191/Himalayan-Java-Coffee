import React from 'react'
import './Btn.css'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Btn() {
  return (
    <>
      <div className="intro-button">
          <button>
            Learn More <FaLongArrowAltRight />
          </button>
        </div>
    </>
  )
}
