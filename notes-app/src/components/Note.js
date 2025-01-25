import React from 'react';

const Note = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-md">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

export default Note;