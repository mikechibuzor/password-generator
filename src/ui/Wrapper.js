import { PropTypes } from 'prop-types'
const Wrapper = (props) => {
  return (
    <main className='h-screen w-full bg-black flex flex-col gap-y-5 items-center pt-20 lg:pt-0  lg:justify-center'>
      {props.children}
    </main>
  )
}
Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}
export default Wrapper
