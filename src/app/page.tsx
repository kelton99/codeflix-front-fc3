import Header from './components/Header';
import MovieRow from './components/MovieRow';
import Banner from './components/Banner';
import { getFeatureMovie } from './service/MovieService';

export default async function Home() {
  const featuredMovie = await getFeatureMovie('101');
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
        <Banner movie={featuredMovie} />
        <MovieRow sectionTitle='Trending now' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Action Movies' />
        <MovieRow sectionTitle='Trending now' />
      </main>
    </div>
  );
}
