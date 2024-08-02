import React, { useState } from 'react';
import { Calendar, Music, Coffee, PenTool, Glasses, Dumbbell, Laptop, Paintbrush, DogIcon, Search, Microscope, PersonStanding } from 'lucide-react';

const categories = [
  { name: 'Animals, Bugs, Pets', icon: DogIcon },
  { name: 'Art, Creativity, Music', icon: Paintbrush },
  { name: 'General Literature', icon: PenTool },
  { name: 'Science and Technology', icon: Microscope },
  { name: 'Hobbies, Sports, Outdoors', icon: Dumbbell },
  { name: 'Real Life', icon: PersonStanding },
  { name: 'Mystery and Suspense', icon: Search },

];

const subcategories = [
  'Alternative Music', 'Blues', 'Classical Music', 'Country Music', 'Dance Music',
  'Electronic Music', 'Hip Hop / RAP', 'Latin Music', 'Jazz', 'Opera', 'POP'
];

const StoryForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg text-black">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" size={20} />
          What is the Category of your Event?
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors ${
                selectedCategory === category.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <category.icon size={24} />
              <span className="mt-2 text-xs text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Select Subcategory</h3>
        <div className="flex flex-wrap gap-2">
          {subcategories.map((subcat) => (
            <button
              key={subcat}
              className="px-4 py-2 bg-blue-100 text-blue-500 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              {subcat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Is this a Private or Public Event?</h3>
        <div className="flex bg-gray-100 rounded-full p-1 w-64">
          <button
            className={`flex-1 py-2 rounded-full text-sm ${
              !isPublic ? 'bg-white shadow-sm' : ''
            }`}
            onClick={() => setIsPublic(false)}
          >
            Private
          </button>
          <button
            className={`flex-1 py-2 rounded-full text-sm ${
              isPublic ? 'bg-white shadow-sm' : ''
            }`}
            onClick={() => setIsPublic(true)}
          >
            Public
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">When will this Event be?</h3>
        <div className="space-y-4">
          <select className="w-full p-2 border rounded-md">
            <option>Monthly</option>
          </select>
          <select className="w-full p-2 border rounded-md">
            <option>Every 1st day of the month</option>
          </select>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Starts</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                defaultValue="2018-03-22"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">End By</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                defaultValue="2018-09-23"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <input type="time" className="w-full p-2 border rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryForm;