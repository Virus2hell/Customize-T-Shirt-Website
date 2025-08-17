import React from 'react'
import {SketchPicker} from 'react-color'
import {useSnapshot} from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#ffffff",
          "#808080",
          "#000000",
          "#FFA500",
          "#A52A2A",
          "#835C3B",
          "#FF0000",
          "#00FFFF",
          "#0000FF",
          "#800080",
          "#FFFF00",
          "#008000",
          "#FF00FF",
          "#7FFFD4",
          "#FFC0CB",
          "#845EC2"
        ]}
        onChange={(color) => state.color = color.hex}
      />

    </div>
  )
}

export default ColorPicker