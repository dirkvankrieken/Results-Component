export default function Result() {
  return (
    <div className="p-8 bg-(image:--bg-results-gradient) rounded-b-4xl text-center md:rounded-4xl md:flex-1 box-border">
      <div className="text-2xl text-light-lavender pb-6">Your Result</div>
      <div className="m-auto bg-(image:--bg-results-gradient-circle) rounded-full w-45 h-45">
        <span className="text-6xl font-bold text-white relative top-12">
          76
        </span>
        <br />
        <span className="text-light-lavender relative top-12">of 100</span>
      </div>
      <div className="pt-6 pb-4 text-3xl text-white">Great</div>
      <div className="text-light-lavender pb-8">
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
  )
}
