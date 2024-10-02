import HeroSlider from '@/components/HeroSlider'

export default function Home() {
  const sliderImages = [
    {
      alt: '',
      src: 'https://cdn.pixabay.com/photo/2023/11/01/11/07/path-8357152_1280.jpg',
    },
    {
      alt: '',
      src: 'https://cdn.pixabay.com/photo/2022/01/13/00/05/austria-6934162_1280.jpg',
    },
    {
      alt: '',
      src: 'https://cdn.pixabay.com/photo/2023/10/29/14/37/pumpkins-8350480_1280.jpg',
    },
  ]

  return (
    <main role="main" className="wrapper">
      <HeroSlider images={sliderImages} />
    </main>
  )
}
