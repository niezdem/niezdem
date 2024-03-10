import Card from './ui/Card';

const WorkAvailabilityWidget = () => (
  <Card link="/contact" className={`bg-[url('/noise.svg')] `}>
    <p className="flex flex-col items-center justify-center pb-5 text-center text-2xl font-bold text-white sm:text-3xl">
      <span className="uppercase">Open to</span>
      <span className="uppercase">opportunities</span>
      <span className="text-xl uppercase sm:text-2xl">from mid-April 2023</span>
      <span className="text-sm sm:text-base">(click to read more)</span>
    </p>
  </Card>
);

export default WorkAvailabilityWidget;
