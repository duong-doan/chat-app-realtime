import React from 'react';

const dataMenu = [
  {
    name: 'Messages',
    iconClass: 'fas fa-comment',
  },
  {
    name: 'Calendar',
    iconClass: 'fas fa-calendar-alt',
  },
  {
    name: 'Trending',
    iconClass: 'fas fa-chart-line',
  },
  {
    name: 'Images',
    iconClass: 'fas fa-images',
  },
  {
    name: 'Games',
    iconClass: 'fas fa-gamepad',
  },
];

export default function SidebarMenu() {
  return (
    <div className='col-2'>
      <div id='nav-bar'>
        <div id='nav-content'>
          {dataMenu.map((item, index) => (
            <div className='nav-button' key={index}>
              <i className={item.iconClass}></i>
              <span>{item.name}</span>
            </div>
          ))}
          <div id='nav-content-highlight'></div>
        </div>
      </div>
    </div>
  );
}
