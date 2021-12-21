function Line() {
  return (
    <div className="hidden lg:inline lines">
      <div className="circle circle-top  top-[13.6rem] -left-8">
        <div className="inner-circle relative">
          <div className="line line-left absolute h-56 w-0.5 bg-light-blue top-1/2 left-[0.195rem]">
            <div className="line absolute h-0.5 w-[58.5rem] bg-light-blue bottom-0">
              <div className="line absolute w-0.5 h-[2.5rem] top-0 bg-light-blue left-[20rem]">
                <div className="circle -left-[0.45rem] top-[1.8rem]">
                  <div className="inner-circle"></div>
                </div>
              </div>
              <div className="line absolute w-0.5 h-10 top-0 bg-light-blue left-[35.8rem]">
                <div className="circle -left-[0.425rem] top-[1.8rem]">
                  <div className="inner-circle"></div>
                </div>
              </div>
              <div className="line absolute w-0.5 h-10 top-0 bg-light-blue left-[58.5rem]">
                <div className="circle -left-[0.45rem] top-[1.8rem]">
                  <div className="inner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Line;
