import React from 'react';
import PropTypes from 'prop-types';
export default function ProfileImage(props) {
   const { src, alt } = props;
   const defaultPlaceHolderimage = 'https://via.placeholder.com/200.png';
   return (
      <>
         <figure className="image-replacement">
            <img
               {...props}
               src={src ? src : defaultPlaceHolderimage}
               width={src ? null : 200}
               height={src ? null : 200}
               alt={alt}
               className="defaults-image rounded-full border-solid border-white border-2 mt-3"
            />
            <noscript>
               {/* it's not happend usually */}
               <img src={defaultPlaceHolderimage} width="1400" height="900" />
            </noscript>
         </figure>
      </>
   );
}

ProfileImage.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string.isRequired,
};

ProfileImage.defaultProps = {
   alt: 'image for SALTO KS',
};
