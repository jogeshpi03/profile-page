import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary'
import './App.css';

// import Expertise from './containers/Expertise'
// import Testimonial from './containers/Testimonial'
// import Portfolio from './containers/Portfolio'

const Portfolio     = lazy(() => import('./containers/Portfolio'))
const Testimonial   = lazy(() => import('./containers/Testimonial'))
const Expertise     = lazy(() => import('./containers/Expertise'))


let expertise = ['Laravel', 'Codeigniter', 'jQuery', 'React', 'Vue'];
let testimonials = [
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
        name: "Sarah Dayan", 
        role: "Staff Engineer, Algolia"
    }
];


function App() {
    return (
        <div className="container m-auto bg-white">
            <div className="w-full flex flex-wrap bg-grey-light">
                <div className="lg:border-r border-red-100 w-full md:w-1/3 lg:w-1/3 bg-grey">
                    <div className="p-6 md:p-8 lg:p-8 lg:border-b border-red-100">
                        <div className="">
                            <svg className="mb-6 bd-placeholder-img bd-placeholder-img-lg d-block w-100 rounded-full" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#777"></rect>
                                <text x="40%" y="50%" fill="#555" dy=".3em">Image</text>
                            </svg>
                            <h1 className="text-3xl mb-6 font-bold text-gray-600">Jogesh Sharma</h1>
                        </div>
                        <div>
                            <h2 className="text-base font-bold uppercase text-green mb-2">Location</h2>
                            <p className="text-gray-500 text-sm">Zone 6, Southwest US</p>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 lg:p-8">
                        <h2 className="text-base font-bold uppercase text-green mb-2">About Me</h2>
                        <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className="w-full md:w-2/3 lg:w-2/3 bg-grey">
                            <div className="p-6 md:p-8 lg:p-8 lg:border-b border-red-100">
                                <div className="portfolio">
                                    <h2 className="text-base font-bold uppercase text-green mb-4">Portfolio</h2>
                                    <Portfolio />
                                </div>
                            </div>
                            <div className="p-6 md:p-8 lg:p-8">
                                <div className="testimonials mb-8">
                                    <h2 className="text-base font-bold uppercase text-green mb-2">Testimonials</h2>
                                    <div>
                                        { testimonials.map( (testimonial, i) => <Testimonial key={`t${i}`} {...testimonial} /> ) }
                                    </div>
                                </div>
                                <div className="expertise">
                                    <h2 className="text-base font-bold uppercase text-green mb-2">Area of Expertise</h2>
                                    <div className="flex flex-wrap">
                                        <Expertise expertise={expertise} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
    );
}

export default App;
