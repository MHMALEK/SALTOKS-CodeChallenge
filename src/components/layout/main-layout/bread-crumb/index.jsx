import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function BreadCrumb(props) {
   const { children, url } = props;
   return (
      <div className="nav-wrapper bg-gray-200">
         <nav className="breadcrumb ml-6 bg-grey-light rounded font-sans ">
            <ol className="list-reset flex text-grey-dark text-gray-500">
               <li>
                  <Link className="breadcrumb-item" to={url}>
                     {children}
                  </Link>
               </li>
               <li>
                  <span className="mx-2">/</span>
               </li>
            </ol>
         </nav>
      </div>
   );
}

BreadCrumb.propTypes = {
   children: PropTypes.node.isRequired,
   url: PropTypes.string.isRequired,
};
