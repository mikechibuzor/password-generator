import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { PropTypes } from 'prop-types'

const CheckBoxes = ({ setPasswordStrengthCounter, passwordStrengthCounter }) => {
  const toggleCheckbox = (event) => {
    if (event.target.checked) {
      passwordStrengthCounter++
      setPasswordStrengthCounter(passwordStrengthCounter)
    } else {
      passwordStrengthCounter--
      setPasswordStrengthCounter(passwordStrengthCounter)
    }
  }
  return (
    <>
      <FormGroup className='text-gray-300 w-full mt-2'>
        <FormControlLabel
          control={
            <Checkbox
              onChange={toggleCheckbox}
              sx={{
                color: 'rgb(209 213 219)',
                '&.Mui-checked': {
                  color: 'rgb(134 239 172)'
                }
              }}
            />
          }
          label='Include Uppercase Letters'
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={toggleCheckbox}
              sx={{
                color: 'rgb(209 213 219)',
                '&.Mui-checked': {
                  color: 'rgb(134 239 172)'
                }
              }}
            />
          }
          label='Include Lowercase Letters'
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={toggleCheckbox}
              sx={{
                color: 'rgb(209 213 219)',
                '&.Mui-checked': {
                  color: 'rgb(134 239 172)'
                }
              }}
            />
          }
          label='Include Numbers'
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={toggleCheckbox}
              sx={{
                color: 'rgb(209 213 219)',
                '&.Mui-checked': {
                  color: 'rgb(134 239 172)'
                }
              }}
            />
          }
          label='Include Symbols'
        />
      </FormGroup>
    </>
  )
}
CheckBoxes.propTypes = {
  setPasswordStrengthCounter: PropTypes.number,
  passwordStrengthCounter: PropTypes.number
}
export default CheckBoxes
