import React from 'react';

const Sidebar = ({ topics, onTopicSelect }) => {
  return (
    <aside className="p-3 bg-light">
      <h5>Topics</h5>
      <ul className="list-group">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-action"
            onClick={() => onTopicSelect(topic)}
          >
            {topic}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
