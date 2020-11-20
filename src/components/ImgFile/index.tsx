import React, { HTMLProps } from 'react';

import missingFile from '../../assets/missing_img.png';

const ImgFile: React.FC<HTMLProps<HTMLImageElement>> = ({ src, alt }) => (
    <>
        {src ? (
            <img src={src} alt={alt} />
        ) : (
            <img src={missingFile} alt={alt} />
        )}
    </>
);

export default ImgFile;
