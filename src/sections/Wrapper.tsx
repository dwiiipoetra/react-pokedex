// import React from 'react'

const Wrapper = (Component: React.FC) => () => {
  return (
    <div className="h-[80vh] mx-[5rem] border border-t-0 border-b-0 border-slate-700">
      <Component />
    </div>
  )
}

export default Wrapper