import Timer from './timer.model'

fdescribe('timer', () => {
 
  beforeEach(() => {
  });

  it('should tick correctly', () => {
    const timer = new Timer();
    expect(timer.toString()).toEqual('00:00');
    timer.tick();
    expect(timer.toString()).toEqual('00:01');
  });

  it('should display as minutes and seconds', () => {
    const timer = new Timer(90);
    expect(timer.toString()).toEqual('01:30');
    const timerB = new Timer(59)  
    expect(timerB.toString()).toEqual('00:59');
    const timerC = new Timer(60);
    expect(timerC.toString()).toEqual('01:00');
    const timerD = new Timer(0);
    expect(timerD.toString()).toEqual('00:00');
  });

  it('should display as hours', () => {
    const timer = new Timer(3600);
    expect(timer.toString()).toEqual('01:00:00');
  });

  it('should display as hours, hiding day', () => {
    const timer = new Timer(86398).tick();
    expect(timer.toString()).toEqual('23:59:59');
    timer.tick();
    expect(timer.toString()).toEqual('00:00:00');
    timer.tick();
    expect(timer.toString()).toEqual('00:00:01');
  });

  it('should initialize days properly', () => {
    const timer = new Timer(86400 * 2);
    expect(timer.getWholeDays()).toEqual('2');
  });


});
