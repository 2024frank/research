import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${theme.spacing.xl};
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
`;

const CloseButton = styled.button`
  position: absolute;
  top: -${theme.spacing.xl};
  right: -${theme.spacing.xl};
  background: ${theme.colors.white};
  color: ${theme.colors.text};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSizes.xl};
  cursor: pointer;
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: scale(1.1);
  }
`;

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalImage src={src} alt={alt} />
        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageModal; 