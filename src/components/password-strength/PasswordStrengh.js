/* eslint-disable prettier/prettier */
import { PropTypes } from 'prop-types'
const PasswordStrength = ({ passwordStrengthCounter }) => {
  return (
    <>
      <div className='w-full flex items-center justify-between text-gray-500 uppercase bg-black px-5 py-4 mt-4 font-medium'>
        <p>Strength</p>
        <div className='flex items-center gap-x-2'>
          {Array.from(Array(4).keys()).map((item, index) => (
            <div
              key={item}
              className={`border px-1 py-3  ${
                index <= passwordStrengthCounter ? 'bg-yellow-600' : ''
              }`}
            >
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
PasswordStrength.propTypes = {
  passwordStrengthCounter: PropTypes.number
}
export default PasswordStrength
