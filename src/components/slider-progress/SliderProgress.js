import Slider from '@mui/material/Slider'
import { alpha, styled } from '@mui/material/styles'
import { useState } from 'react'
import { PropTypes } from 'prop-types'

const ProgressSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== 'colorClass'
})(({ colorClass, theme }) => ({
  color: colorClass ? 'rgb(134 239 173)' : 'white',
  '& .MuiSlider-rail': {
    color: 'rgb(0,0,0)'
  },
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`
    },
    '&.Mui-active': {
      boxShadow: '0px 0px 0px 1px rgb(134 239 172)',
      color: 'black'
    }
  }
}))

const SliderProgress = ({ setCharacterLength, defaultValue }) => {
  const [newVal, setNewVal] = useState()
  const handleChange = (event) => {
    setNewVal(event.target.value)
    setCharacterLength(newVal)
  }
  return (
    <div className='w-full px-2 mt-2'>
      <ProgressSlider
        aria-label='Character Length'
        defaultValue={defaultValue}
        onChange={handleChange}
        colorClass={newVal}
      />
    </div>
  )
}
SliderProgress.propTypes = {
  setCharacterLength: PropTypes.number,
  defaultValue: PropTypes.number
}
export default SliderProgress
