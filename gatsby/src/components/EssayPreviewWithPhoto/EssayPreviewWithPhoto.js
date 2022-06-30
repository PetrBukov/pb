import React from 'react';
import { Link } from 'gatsby';

import {
  EssayPreviewWithPhotoStyles,
  PhotoContainer,
} from './EssayPreviewWithPhoto.styles';
import tempEssayPhoto from '../../assets/images/tempEssayPhoto.jpg';

export const EssayPreviewWithPhoto = () => (
  <EssayPreviewWithPhotoStyles>
    <PhotoContainer>
      <img alt="i'm meditating" src={tempEssayPhoto} />
      <figcaption className="handwriting">
        Yes, I've got time to meditate
      </figcaption>
    </PhotoContainer>
    <h3>Who am I?</h3>
    <p>
      Morbi semper augue sit amet ex pulvinar, vel ornare erat suscipit. Proin
      et consectetur risus. Nulla facilisi. Donec eleifend ligula eu magna
      facilisis, vitae maximus felis vestibulum. Nullam vestibulum turpis ut
      dignissim aliquam. Fusce in tellus ornare, euismod nibh eget, commodo
      mauris. Aliquam vitae porttitor lacus. Vivamus pellentesque convallis
      porttitor.
    </p>
    <Link to="/">read more →</Link>
  </EssayPreviewWithPhotoStyles>
);
