export default function Result() {
  return (
    <div className="bg-(image:--bg-results-gradient) rounded-b-4xl text-center">
      <div className="text-light-lavender p-6">Your Result</div>
      <div className="m-auto bg-(image:--bg-results-gradient-circle) rounded-full w-33 h-33 flex flex-col gap-1.5 justify-center items-center">
        <span class="text-5xl font-bold text-white">76</span>
        <br />
        <span className="text-light-lavender">of 100</span>
      </div>
      <div className="pt-6 pb-4 text-2xl text-white">Great</div>
      <div className="text-light-lavender pb-8">
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
  )
}
