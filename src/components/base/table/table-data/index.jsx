import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TableData(props) {
   const { className, children, link } = props;
   return (
      <td
         className={cx(
            'base-table--data border-grey-light border hover:bg-gray-100',
            className,
         )}
      >
         {link ? (
            <Link to={link}>
               <div className="p-3">{children}</div>
            </Link>
         ) : (
            <div className="p-3">{children}</div>
         )}
      </td>
   );
}

TableData.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node || PropTypes.func,
   link: PropTypes.string,
};
