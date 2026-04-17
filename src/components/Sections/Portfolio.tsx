import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import {FC, memo, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {portfolioItems.map((item, index) => {
            const {title} = item;
            return (
              <div className="h-72 w-full sm:w-80" key={`${title}-${index}`} style={{perspective: '1000px'}}>
                <FlipCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const FlipCard: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) setFlipped(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setFlipped(false);
  };
  const handleClick = () => {
    if (isMobile) setFlipped(f => !f);
  };

  return (
    <div
      className="relative h-full w-full"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{transformStyle: 'preserve-3d', transition: 'transform 0.6s', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>

      {/* Back face — visible by default */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-lg bg-blue-500 shadow-lg shadow-black/30 lg:shadow-xl"
        style={{backfaceVisibility: 'hidden'}}>
        <h2 className="text-center text-lg font-bold text-white">{title}</h2>
      </div>

      {/* Front face — revealed on hover */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 rounded-lg bg-blue-600 p-6 shadow-lg shadow-black/30 lg:shadow-xl"
        style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
        <h2 className="text-center text-lg font-bold text-white">{title}</h2>
        <p className="text-center text-sm text-gray-300">{description}</p>
        <a
          className="mt-2 flex items-center gap-x-1 text-sm font-medium text-orange-400 hover:text-orange-300"
          href={url}
          onClick={e => e.stopPropagation()}
          target="_blank">
          View project
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
});
