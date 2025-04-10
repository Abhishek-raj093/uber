import React from 'react'

const Home = () => {
    const submitHandler = () => {
        
    }
    return (
        <div className='h-screen relative overflow-hidden'>
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                {/* <LiveTracking /> */}
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                <h4 className='text-2xl font-semibold'>Find a trip</h4>
                <form className='relative py-3' onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                    <input
                        // onClick={() => {
                        //     setPanelOpen(true)
                        //     setActiveField('pickup')
                        // }}
                        // value={pickup}
                        // onChange={handlePickupChange}
                        className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                        type="text"
                        placeholder='Add a pick-up location'
                    />
                    <input
                            // onClick={() => {
                            //     setPanelOpen(true)
                            //     setActiveField('destination')
                            // }}
                            // value={destination}
                            // onChange={handleDestinationChange}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                            type="text"
                            placeholder='Enter your destination' />
                </form>
                </div>
                <div className='bg-red-500 h-0'>

                </div>
            </div>
        </div>
    )
}

export default Home
