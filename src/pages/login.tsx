import React, { FormEvent, useState } from 'react'
import Image from 'next/image';
type Props = {}

interface FormData {
    name: string;
    email: string;
    country: string;
  }

const register = (props: Props) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        country: 'US'
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [error, setError] = useState<string | null>(null);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
    
        try {
          // Here you would typically send the data to your API
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error('Signup failed');
          }
    
          // Handle successful signup
          console.log('Signup successful!', formData);
          // Redirect or show success message
        } catch (err) {
          setError('An error occurred during signup. Please try again.');
          console.error('Signup error:', err);
        } finally {
          setIsSubmitting(false);
        }
      };
    return (
        <div className="flex h-screen bg-white">

             {/* Lef side - Illustration */}
          <div className="w-1/2 bg-blue-600 relative overflow-hidden m-4 rounded-[20px]">
            <div className="absolute inset-0 bg-blue-600">
              {/* Add stars and constellations as SVG or background image */}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold mb-4">Have your own personal website</h2>
                {/* Add illustration components here */}
              </div>
            </div>
          </div>
          {/* Right side - Form */}
          <div className="w-1/2 p-12 bg-white">
            <div className="mb-8">
              <Image src="/pela-logo.svg" alt="Pela Design Logo" width={40} height={40} />
              <span className="ml-2 text-xl font-bold">Pela Design</span>
            </div>
            
            {/* <div className="absolute top-4 right-1/2 transform translate-x-1/2 flex items-center">
              <span className="mr-2 text-gray-500">Questions?</span>
              <span className="text-blue-600 font-semibold">Ask Ho3ein</span>
              <Image src="/avatar.jpg" alt="Ho3ein" width={32} height={32} className="ml-2 rounded-full" />
            </div> */}
    
            <h1 className="text-5xl font-bold mb-4 text-indigo-600">Sign In</h1>
            <p className="text-gray-600 mb-8">
              Don't have an account? <a href="#" className="text-blue-600">Register here</a>
            </p>
    
            {error && <p className="text-red-500 mb-4">{error}</p>}
    
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="US">🇺🇸 United States</option>
                  {/* Add more country options here */}
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing up...' : 'Sign up'}
              </button>
            </form>
          </div>
    
         
        </div>
      );
}

export default register