import React from 'react'
import Svg, { Circle, Rect, G, Path } from 'react-native-svg'

export function BackArrowIcon({ width = 13, height = 16, color = '#fff' }) {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width={width}
         height={height}
         viewBox="0 0 8.294 14.117"
      >
         <G transform="translate(109.772 14.117) rotate(180)">
            <G transform="translate(101.478)">
               <Path
                  fill={color}
                  d="M109.546,6.508,103.264.226a.774.774,0,0,0-1.092,0l-.463.463a.773.773,0,0,0,0,1.092l5.275,5.275L101.7,12.337a.774.774,0,0,0,0,1.092l.463.462a.774.774,0,0,0,1.092,0L109.546,7.6a.779.779,0,0,0,0-1.1Z"
                  transform="translate(-101.478 0)"
               />
            </G>
         </G>
      </Svg>
   )
}
