interface EvListener<T extends Function> {
  /**
   * Adds a listener to this event.
   */
  addListener: (callback: T) => void

  /**
   * Stop listening to this event. The listener argument is the listener to remove
   */
  removeListener: (listener: T) => void

  /**
   * Check whether listener is registered for this event. Returns true if it is listening, false otherwise.
   */
  hasListener: (listener: T) => boolean
}

type Listener<T> = EvListener<(arg: T) => void>

/**
 * Experiments contains a number of custom APIs that are implemented for pulse
 * browser. They are defined as webextention experiments (hence `experiments`)
 * and thus can be carried across to Firefox Nightly, Dev Edition or WaterFox
 */
declare namespace experiments {}

/// <reference path="./prefs.d.ts">
