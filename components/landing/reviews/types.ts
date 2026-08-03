export interface Review {
  id: string
  name: string
  position: string | null
  message: string
  avatar: string | null
  created_at: Date | string
}

export interface ReviewCardProps {
  review: Review
}
