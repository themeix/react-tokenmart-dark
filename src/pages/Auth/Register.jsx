import React from 'react'
import FooterV2 from '../../components/Footer/FooterV2'
import Header from '../../components/Header/Header'

const Register = () => {
  return (
    <div>
<Header/>
  {/*  ====================== Hero Section =============================  */}
  <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
    <div className="container mx-auto relative px-4 z-10">
      <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold">Create Account </h2>
    </div>
  </section>
  {/*  ====================== Blog Section =============================  */}
  <div className="blog-section relative mb-20 lg:mb-32">
    <div className="container mx-auto relative px-4 z-10">
      <div className="max-w-xl">
        <h3 className="block border-b border-blueGray-300 font-display text-3xl text-blueGray-900 font-bold pb-6 mb-6">Create Account</h3>
        <form action="#">
          <div className="mb-4">
            <label className="block font-body text-blueGray-600 mb-4" htmlFor="Username2">Username or Email Address *</label> 
            <input className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-900 placeholder-blueGray-900 bg-blueGray-100 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none" id="Username2" type="text" />
          </div>
          <div className="mb-4">
            <label className="block font-body text-blueGray-600 mb-4" htmlFor="Password2">Password *</label> 
            <input className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-900 placeholder-blueGray-900 bg-blueGray-100 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none" id="Password2" type="password" />
          </div>
          <div className="mb-6">
            <div className="flex items-center cursor-pointer mr-4 my-2"> 
              <input type="checkbox" id="checkbox2" className="checkbox mr-2" defaultChecked />
              <label className="block font-body text-blueGray-600" htmlFor="checkbox2">I have read and agree to the website <a className="text-indigo-500 transition duration-500 underline-hover" href="term-condition">terms and conditions</a> *</label>
            </div>
          </div>
          <button type="submit" className="btn inline-block text-blueGray-900 font-body font-medium rounded py-3 px-6 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">Register <img className="w-4 h-4 inline-block ml-2 mb-1" src="assets/images/check-white-icon.svg" alt="title" /></button>
        </form>
      </div>
    </div>
  </div>
  {/*  ====================== Footer Section =============================  */}
 <FooterV2/>
</div>

  )
}

export default Register