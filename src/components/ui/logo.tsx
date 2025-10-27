import movieTrendLogo from '@/assets/movie-trend.svg';
import { Link } from 'react-router';

export default function Logo() {
  return (
    <Link to="/">
      <img src={movieTrendLogo} alt="Movie Trend Logo" width={128} height={44} className="w-20 lg:w-32" />
    </Link>
  )
}