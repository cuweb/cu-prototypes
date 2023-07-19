import React from 'react';
import { formStyles, formErrorStyles } from '../../styles/formClasses'

const CheckboxWrapper = () => {
  // Component logic and state can be defined here

  return (
    // JSX structure and component rendering
<fieldset>
  <legend className="sr-only">Notifications</legend>
  <div className="space-y-2 mt-6">
  <label className={formStyles.label}>
            Filter results by type
          </label>
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
        checked
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
          Pages
        </label>
        {/* <span id="comments-description" className="text-gray-500">
          <span className="sr-only">New comments </span>so you always know what's happening.
        </span> */}
      </div>
    </div>
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
        checked
          id="candidates"
          aria-describedby="candidates-description"
          name="candidates"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="candidates" className="font-medium text-gray-900">
          News
        </label>
        {/* <span id="candidates-description" className="text-gray-500">
          <span className="sr-only">New candidates </span>who apply for any open postings.
        </span> */}
      </div>
    </div>
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
        checked
          id="offers"
          aria-describedby="offers-description"
          name="offers"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="offers" className="font-medium text-gray-900">
          Video
        </label>
        {/* <span id="offers-description" className="text-gray-500">
          <span className="sr-only">Offers </span>when they are accepted or rejected by candidates.
        </span> */}
      </div>
    </div>
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
        checked
          id="offers"
          aria-describedby="offers-description"
          name="offers"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="offers" className="font-medium text-gray-900">
          Events
        </label>
        {/* <span id="offers-description" className="text-gray-500">
          <span className="sr-only">Offers </span>when they are accepted or rejected by candidates.
        </span> */}
      </div>
    </div>
  </div>
</fieldset>

  );
};

export const Checkbox = Object.assign(CheckboxWrapper, {})
