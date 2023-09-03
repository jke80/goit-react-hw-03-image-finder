import React, { Children } from "react";

export const ImageGallery = ({Children}) => {
    return (
<ul class="gallery">
   {Children}
  </ul>
);
}