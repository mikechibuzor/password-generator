import CopyIcon from '../../assets/icons/CopyIcon';
const CopyPassword = ({ generatedPassword }) => {
  return (
    <div className='flex items-center justify-between w-10/12 md:w-7/12 lg:w-4/12 px-5 py-4 bg-gray-800 shadow-md'>
      {/* copy text */}
      <div className='text-gray-500 text-2xl'>
        {generatedPassword || 'P4$F5WOrD!'}
      </div>
      <CopyIcon strokeColor={'rgb(134 239 172)'} />
    </div>
  );
};
export default CopyPassword;
