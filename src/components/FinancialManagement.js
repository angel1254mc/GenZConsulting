import React from 'react'
import FinancialCard from './FinancialCard'

const FinancialManagement = () => {
  return (
    <div className="flex flex-col w-full my-10 mb-20 xl:px-20 md:px-10 2xl:my-20 items-center">
      <section className="flex flex-col w-[85%] items-center w-max-[1300px] xl:max-w-[1400px] gap-y-2">
        <p className="text-xs xl:text-base 2xl:text-lg md:text-sm text-violet-800 font-light">
          WE HANDLE FINANCES SO YOUR BUSINESS CAN MOVE SMOOTHLY
        </p>
        <h1 className="flex flex-col text-2xl xl:text-4xl 2xl:text-5xl md:text-3xl text-center items-center font-semibold">
          <span className="sm:hidden">Financial Management</span><span className="hidden sm:flex">Financial</span>
          <span  className="hidden sm:flex">Management</span>
        </h1>
        <p className="text-center text-sm xl:w-[90%] 2xl:w-auto xl:text-base 2xl:text-lg xl:mt-6 px-2 sm:px-10 lg:max-w-[1000px] xl:max-w-[1250px] md:text-sm text-gray-800 font-regular">
        Our Financial Management services provide businesses with the tools and insights needed to make informed decisions and ensure financial stability. Our services include:
        </p>

        <div className="w-full mt-10 gap-x-4 sm:gap-x-12 gap-y-8 flex justify-center n flex-wrap">
            <div className="flex gap-x-4 sm:gap-x-12">
                <FinancialCard content={"Budgeting and Forecasting"}/>
                <FinancialCard content={"Financial Analysis and Reporting"}/>
            </div>
            <div className="flex gap-x-4 sm:gap-x-12">
                <FinancialCard content={"Cash Flow Management and Optimization"}/>
                <FinancialCard content={"Risk Assessment and Mitigation"}/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default FinancialManagement