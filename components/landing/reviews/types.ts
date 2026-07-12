export interface Review {
  id: string
  name: string
  position: string | null
  message: string
  avatar: string | null
  date: Date | string
}

export interface ReviewCardProps {
  review: Review
}
