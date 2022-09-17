import { useState } from 'react'
import SliderProgress from '../slider-progress/SliderProgress'
import CopyPassword from '../copy-password/CopyPassword'
import CheckBoxes from '../check-boxes/CheckBoxes'
import PasswordStrength from '../password-strength/PasswordStrengh'
import ArrowRight from '../../assets/icons/ArrowRight'
import LoadingButton from '@mui/lab/LoadingButton'
import { ALPHA_NUMERRIC_SYMBOL } from '../../utils/constants'

const GeneratePassword = () => {
  const defaultCharacterLength = 0
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [characterLength, setCharacterLength] = useState(defaultCharacterLength)
  const [passwordStrengthCounter, setPasswordStrengthCounter] = useState(-1)
  const [isLoading] = useState(false)

  const generateHandler = () => {
    setGeneratedPassword(
      new Array(characterLength)
        .fill('')
        .map(() => {
          const character = ALPHA_NUMERRIC_SYMBOL[Math.floor(Math.random() * 95)]
          return [character]
        })
        .join('')
    )
  }

  return (
    <>
      <CopyPassword generatedPassword={generatedPassword} />
      <div className='flex flex-col items-center justify-between w-10/12 md:w-7/12 lg:w-4/12 px-5 py-4  bg-gray-800 shadow-md'>
        <p className='flex items-center justify-between w-full'>
          <span className='text-sm font-bold text-gray-300'>Character Length</span>
          <span className='text-green-300 text-3xl font-semibold'>{characterLength || 0}</span>
        </p>
        <SliderProgress
          setCharacterLength={setCharacterLength}
          defaultValue={defaultCharacterLength}
        />
        <CheckBoxes
          setPasswordStrengthCounter={setPasswordStrengthCounter}
          passwordStrengthCounter={passwordStrengthCounter}
        />
        <PasswordStrength passwordStrengthCounter={passwordStrengthCounter} />
        <LoadingButton
          variant='outlined'
          loading={isLoading}
          onClick={generateHandler}
          className='flex items-center justify-center gap-x-3 bg-green-300 px-4 py-4 w-full mt-10 font-semibold'
          sx={{
            backgroundColor: 'rgb(134 239 172)',
            color: 'black',
            padding: '.8rem 2rem',
            marginTop: '2rem',
            '&.MuiButtonBase-root': {
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 2px rgba(0,0,0,.3)`,
                backgroundColor: 'rgb(134 239 172)'
              }
            }
          }}>
          <span>GENERATE</span>
          <ArrowRight />
        </LoadingButton>
      </div>
    </>
  )
}

export default GeneratePassword
