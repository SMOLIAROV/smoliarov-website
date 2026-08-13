export interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export interface MobileMenuProps {
  navigationType
  sections: string[]
  isOpen: boolean
  onClose: () => void
}

export interface MobileMenuCloseButtonProps {
  onClose: () => void
}

export interface MobileMenuLinksProps {
  navigationType: string
  sections: string[]
  isOpen: boolean
  onClose: () => void
}

export interface MobileMenuBottomCTAProps {
  isOpen: boolean
  onClose: () => void
}
