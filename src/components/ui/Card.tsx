import { StripedPattern } from './StripedPattern'

export default function Card() {
  return (
    <>
      <div className='card lg:card-side bg-base-200 shadow-sm w-full max-w-4xl mx-auto'>
        <figure>
          <img
            src='https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp'
            alt='Album'
          />
        </figure>

        <div className='card-body relative overflow-hidden'>
          <div className='absolute inset-0 z-0 opacity-20'>
            <StripedPattern className='w-full h-full mask-[radial-gradient(300px_circle_at_center,var(--color-base-content),transparent)]' />
          </div>

          <div className='relative z-10'>
            <h2 className='card-title text-2xl'>New album is released!</h2>
            <div className='divider'></div>
            <p className='text-lg'>
              Click the button to listen on Spotiwhy app.
              <ul>
                <li>gdfg</li>
                <li>gdfg</li>
                <li>gdfg</li>
                <li>gdfg</li>
                <li>gdfg</li>
                <li>gdfg</li>
              </ul>
            </p>
            <div className='divider'></div>
            <div className='card-actions w-full max-w-md'>
              <div className='badge badge-outline badge-primary badge-md'>
                Typescript
              </div>
              <div className='badge badge-outline badge-secondary badge-md'>
                React
              </div>
              <div className='badge badge-outline badge-accent badge-md'>
                Tailwind
              </div>
            </div>
            <div className='divider'></div>
            <div className='card-actions w-full max-w-md justify-between'>
              <div className='text-lg'>live demo</div>
              <div className='text-lg'>github repo</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
