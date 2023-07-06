import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/trending_topic',
    icon: <AiIcons.AiFillHome />,
 
    subNav: [
      {
        title: 'Trending Topics',
        path: '/trending_topic',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Word Cloud',
        path: '/trnding_analysis',
        icon: <IoIcons.IoIosPaper />
      }
     
    
    ]
  },
 
  
    ]
 
