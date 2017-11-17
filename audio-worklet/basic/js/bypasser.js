/**
 * @class TimedProcessor
 * @extends AudioWorkletProcessor
 *
 * This processor class is for the life cycle and the processor state event.
 * It only lives for 1 render quantum.
 */
class TimedProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.createdAt_ = currentTime;
    this.lifetime_ = 128 / sampleRate;
  }

  process() {
    return currentTime - this.createdAt_ > this.lifetime_ ? false : true;
  }
}
