import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehiclePanel(false)
            }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vericle</h3>

            <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹193.30</h2>
            </div>

            <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill">1</i></span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹65</h2>
            </div>

            <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill">3</i></span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹118.86</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
